"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("config"));
var app_1 = __importDefault(require("./app"));
var logger_1 = require("./logger");
var PORT = config_1.default.get("app.port");
var server = app_1.default.listen(PORT, function () {
    logger_1.logger.info("App is running on port " + config_1.default.get("app.port"));
});
exports.default = server;
//# sourceMappingURL=server.js.map