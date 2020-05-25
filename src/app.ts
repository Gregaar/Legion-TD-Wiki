import express from "express";
import commonMiddleware from "./middleware";

const app = express();

app.use(commonMiddleware());

export default app;