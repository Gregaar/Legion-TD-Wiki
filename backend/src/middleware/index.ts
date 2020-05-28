import { logger, requestLogger } from "../logger";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from 'cors';

export default () => {
    logger.info("Registering common middleware...");

    return [helmet(), cors(), bodyParser.json(), requestLogger];
};