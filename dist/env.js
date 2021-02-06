"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_SYNC = exports.DB_URL = exports.LOG_LEVEL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.LOG_LEVEL = process.env.LOG_LEVEL;
exports.DB_URL = process.env.DB_URL;
exports.DB_SYNC = process.env.DB_SYNC === 'true';
//# sourceMappingURL=env.js.map