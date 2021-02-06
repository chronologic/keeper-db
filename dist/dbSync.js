"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const createConnection_1 = require("./createConnection");
const logger_1 = __importDefault(require("./logger"));
createConnection_1.createConnection().then(() => {
    logger_1.default.info('DB schema synchronized');
});
//# sourceMappingURL=dbSync.js.map