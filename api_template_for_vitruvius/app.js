const { debugPrint } = require("@antonpichka/vitruvius");
const ip = require("ip");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes");
const express = require("express");
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",routes);

app.listen(port, () => {
  debugPrint(`Server running on: ${ip.address()}:${port}`);
});