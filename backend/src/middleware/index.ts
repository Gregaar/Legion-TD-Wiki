import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Handler } from "express";
import helmet from "helmet";

import { logger, requestLogger } from "../logger";

const corsOptions = {
  credentials: true,
};

export default (): Handler[] => {
  logger.info("Registering common middleware...");

  return [
    helmet(),
    cors(corsOptions),
    bodyParser.json(),
    cookieParser(),
    requestLogger,
  ];
};
