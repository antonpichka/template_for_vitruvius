const { debugPrint } = require("@antonpichka/vitruvius");
const express = require("express");
const router = express.Router();
const ExampleVitruvius = require("./public/src/named_vitruvius/example_vitruvius/example_vitruvius.js");
const EnumFirstRequestMethodExampleVitruvius = require("./public/src/named_vitruvius/example_vitruvius/named_method_example_vitruvius/enum_first_request_method_example_vitruvius.js"); 

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

module.exports = router;