import { debugPrint } from "@antonpichka/vitruvius";
import cors from "cors"
import ip from "ip";
import express, { Application } from "express";
import dotenv from "dotenv";
import routesTypeGet from "./routes_type_get";
import routesTypePost from "./routes_type_post";

dotenv.config({ path: "../.env" });

const application: Application = express();
const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 1010

application.use(cors())
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use("/", routesTypeGet);
application.use("/", routesTypePost);
application.listen(port, () => {
    debugPrint(`Server running on: ${ip.address()}:${port}`);
});