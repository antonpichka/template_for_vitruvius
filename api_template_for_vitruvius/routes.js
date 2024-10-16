const { debugPrint, debugPrintException } = require("@antonpichka/vitruvius");
const dotenv = require("dotenv");
const express = require("express");
const router = express.Router();
const ExampleVitruvius = require("./public/src/named_vitruvius/example_vitruvius/example_vitruvius.js");
const EnumFirstRequestMethodExampleVitruvius = require("./public/src/named_vitruvius/example_vitruvius/named_method_example_vitruvius/enum_first_request_method_example_vitruvius.js"); 
const { Client } = require("pg");

dotenv.config();

const client = new Client({
  host: "db",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  port: process.env.DB_PORT,
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

router.get("/example", async (_req, res)  => {
  const exampleVitruvius = new ExampleVitruvius();
  const firstRequest = await exampleVitruvius.firstRequest();
  debugPrint(firstRequest.toString());
  switch(firstRequest.getEnumNamedMethodNamedVitruvius) {
      case EnumFirstRequestMethodExampleVitruvius.exception:
          res.status(504).json({
            timestamp : new Date().toLocaleString(),
            message : "Exception: " + firstRequest.exceptionController.getKeyParameterException
          });
          break;
      case EnumFirstRequestMethodExampleVitruvius.success:
          res.status(200).json({
            timestamp : new Date().toLocaleString(),
            message : "Success"
          });
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
    debugPrintException("Error fetching users", error);
    res.status(500).json({
      timestamp : new Date().toLocaleString(),
      message: "Internal Server Error"
    });
  }
});

module.exports = router;