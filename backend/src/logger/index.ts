import createRequestLogger from "express-pino-logger";
import createLogger from "pino";

const logger = createLogger();
const requestLogger = createRequestLogger({ logger });

export { logger, requestLogger };
