"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
var createConnection_1 = require("./createConnection");
var logger_1 = __importDefault(require("./logger"));
createConnection_1.createConnection().then(function () {
    logger_1.default.info('DB schema synchronized');
});
//# sourceMappingURL=dbSync.js.map