import express from "express";
import bodyParser from "body-parser";

import { db } from "./database";
import { routes } from "./controllers";

const server = express();
server.use(bodyParser.json());

routes.forEach(route => {
    server[route.method](route.path, route.handler);
});

const start = async () => {
    await db.connect("mongodb://localhost:27017");
    await server.listen(8080);
    console.log("Server ready on port 8080");
}

start();
