import express from "express";

import commonMiddleware from "./middleware";
import builderRouter from "./routes/legion/builders";
import mercenaryRouter from "./routes/legion/mercenary";
import unitRouter from "./routes/legion/units";
import waveRouter from "./routes/legion/waves";
import userRouter from "./routes/user/users";

const app = express();

app.use(commonMiddleware());
app.use(userRouter());
app.use(unitRouter());
app.use(builderRouter());
app.use(waveRouter());
app.use(mercenaryRouter());

export default app;
