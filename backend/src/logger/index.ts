import  createLogger  from "pino";
import  createRequestLogger from "express-pino-logger";

const logger = createLogger();
const requestLogger = createRequestLogger({logger});

export { logger, requestLogger };