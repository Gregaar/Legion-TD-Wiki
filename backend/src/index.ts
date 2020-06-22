import config from "config";
console.log(config.get("jwt.refreshSecret"));
import database from "./db/mongoose";
import server from "./server";

database(config.get("mongo.uri"));
server;
