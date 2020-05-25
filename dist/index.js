"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("config"));
var mongoose_1 = __importDefault(require("./db/mongoose"));
var server_1 = __importDefault(require("./server"));
mongoose_1.default(config_1.default.get("mongo.uri"));
server_1.default;
//# sourceMappingURL=index.js.map