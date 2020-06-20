import config from "config";
console.log(config.get("jwt.secret");
console.log(config.get("jwt.domain");
console.log(config.get("mongo.uri");
console.log(config.get("app.port");                       
import database from "./db/mongoose";
import server from "./server";

database(config.get("mongo.uri"));
server;
