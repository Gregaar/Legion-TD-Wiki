import config from "config";
import app from "./app";
import { logger } from "./logger";

const PORT = config.get("app.port");

const server = app.listen(PORT, () => {
    logger.info(`App is running on port ${config.get("app.port")}`);
});

export default server;

