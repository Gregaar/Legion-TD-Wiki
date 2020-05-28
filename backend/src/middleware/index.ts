import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import { logger, requestLogger } from "../logger";

export default () => {
  logger.info("Registering common middleware...");

  return [helmet(), cors(), bodyParser.json(), requestLogger];
};
