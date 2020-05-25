"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = __importDefault(require("pino"));
var express_pino_logger_1 = __importDefault(require("express-pino-logger"));
var logger = pino_1.default();
exports.logger = logger;
var requestLogger = express_pino_logger_1.default({ logger: logger });
exports.requestLogger = requestLogger;
//# sourceMappingURL=index.js.map