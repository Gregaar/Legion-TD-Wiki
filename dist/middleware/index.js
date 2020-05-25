"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../logger");
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
exports.default = (function () {
    logger_1.logger.info("Registering common middleware...");
    return [helmet_1.default(), body_parser_1.default.json(), logger_1.requestLogger];
});
//# sourceMappingURL=index.js.map