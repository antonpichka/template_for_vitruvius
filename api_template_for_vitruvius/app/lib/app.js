const { debugPrint } = require("@antonpichka/vitruvius");
const ip = require("ip");
const express = require("express");
const app = express();
const routesTypeGet = require("./routes_type_get");
const routesTypePost = require("./routes_type_post");
require("dotenv").config({ path: "../.env" });
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routesTypeGet);
app.use("/", routesTypePost);
app.listen(port, () => {
  debugPrint(`Server running on: ${ip.address()}:${port}`);
});