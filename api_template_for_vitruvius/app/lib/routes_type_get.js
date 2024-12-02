const { debugPrint, debugPrintException } = require("@antonpichka/vitruvius");
const router = require("express").Router();
const ExampleVitruvius = require("./named_vitruvius/example_vitruvius/example_vitruvius.js");
const EnumFirstRequestMethodExampleVitruvius = require("./named_vitruvius/example_vitruvius/named_method_example_vitruvius/enum_first_request_method_example_vitruvius.js"); 
const ExceptionCaseFirstRequestMethodExampleVitruvius = require("./named_vitruvius/example_vitruvius/named_method_example_vitruvius/named_case_named_method_named_vitruvius/exception_case_first_request_method_example_vitruvius.js");
const SuccessCaseFirstRequestMethodExampleVitruvius = require("./named_vitruvius/example_vitruvius/named_method_example_vitruvius/named_case_named_method_named_vitruvius/success_case_first_request_method_example_vitruvius.js");
const { Client } = require("pg");
require("dotenv").config({ path: "../../.env" });

const client = new Client({
  host: "db",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  port: process.env.POSTGRES_PORT,
});

client.connect()
  .then(() => debugPrint("Connected to PostgreSQL"))
  .catch(err => debugPrintException("Connection error", err.stack));

router.get("/", (_req, res) => {
  res.status(200).json({
    timestamp : new Date().toLocaleString(),
    message : "v0.0.1"
  });
});

router.get("/example", async (req, res)  => {
  const exampleVitruvius = new ExampleVitruvius();
  const firstRequest = await exampleVitruvius.firstRequest();
  switch(firstRequest.getEnumNamedMethodNamedVitruvius) {
      case EnumFirstRequestMethodExampleVitruvius.exception:
          new ExceptionCaseFirstRequestMethodExampleVitruvius(req,res,firstRequest.exceptionController)
            .initBuild()
            .disposeBuild();
          break;
      case EnumFirstRequestMethodExampleVitruvius.success:
          new SuccessCaseFirstRequestMethodExampleVitruvius(req,res)
            .initBuild()
            .disposeBuild();
          break;
      default:
          break;
  }
  exampleVitruvius.dispose();
});

router.get("/test/postgres", async (_req, res)  => {
  try {
    const users = await client.query('SELECT * FROM users');
    res.status(200).json({
      timestamp : new Date().toLocaleString(),
      message : users.rows
    });
  } catch(error) {
    res.status(500).json({
      timestamp : new Date().toLocaleString(),
      message: error
    });
  }
});

module.exports = router;