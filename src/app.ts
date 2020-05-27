import express from "express";
import commonMiddleware from "./middleware";
import unitRouter from "./routes/units";

const app = express();

app.use(commonMiddleware());
app.use(unitRouter());

export default app;