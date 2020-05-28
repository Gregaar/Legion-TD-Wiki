import express from "express";

import commonMiddleware from "./middleware";
import unitRouter from "./routes/units";
import waveRouter from "./routes/waves";

const app = express();

app.use(commonMiddleware());
app.use(unitRouter());
app.use(waveRouter());

export default app;
