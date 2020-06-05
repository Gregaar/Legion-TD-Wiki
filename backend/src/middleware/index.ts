import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import { logger, requestLogger } from "../logger";

export default (): any[] => {
  logger.info("Registering common middleware...");

  return [helmet(), cors(), bodyParser.json(), cookieParser(), requestLogger];
};
