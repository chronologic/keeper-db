"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROD_BUILD = exports.DB_SYNC = exports.DATABASE_URL = exports.LOG_LEVEL = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.LOG_LEVEL = process.env.LOG_LEVEL || 'info';
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.DB_SYNC = process.env.DB_SYNC === 'true';
exports.PROD_BUILD = __filename.endsWith('.js');
//# sourceMappingURL=env.js.map