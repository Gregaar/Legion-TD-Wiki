import { logger, requestLogger } from "../logger";
import bodyParser from "body-parser";
import helmet from "helmet";

export default () => {
    logger.info("Registering common middleware...");

    return [helmet(), bodyParser.json(), requestLogger];
};