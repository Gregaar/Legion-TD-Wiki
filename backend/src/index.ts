import config from "config";

import database from "./db/mongoose";
import server from "./server";

database(config.get("mongo.uri"));
server;
