import express from "express";

import commonMiddleware from "./middleware";
import builderRouter from "./routes/builders";
import mercenaryRouter from "./routes/mercenary";
import unitRouter from "./routes/units";
import waveRouter from "./routes/waves";

const app = express();

app.use(commonMiddleware());
app.use(unitRouter());
app.use(builderRouter());
app.use(waveRouter());
app.use(mercenaryRouter());

export default app;
