import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import { logger, requestLogger } from "../logger";

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://affectionate-lovelace-43927e.netlify.app",
  ],
  credentials: true,
};

export default (): any[] => {
  logger.info("Registering common middleware...");

  return [
    helmet(),
    cors(corsOptions),
    bodyParser.json(),
    cookieParser(),
    requestLogger,
  ];
};
