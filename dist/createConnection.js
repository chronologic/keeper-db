"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const env_1 = require("./env");
const connection_string_parser_1 = require("connection-string-parser");
const typeorm_1 = require("typeorm");
const parser = new connection_string_parser_1.ConnectionStringParser({
    scheme: 'postgres',
});
const parsed = parser.parse(env_1.DB_URL);
const { host, port } = parsed.hosts[0];
const params = {
    type: 'postgres',
    host: host || 'localhost',
    port: port || 5432,
    username: parsed.username || 'keeper',
    password: parsed.password || 'keeper',
    database: parsed.endpoint || 'keeper',
    synchronize: env_1.DB_SYNC,
    logging: env_1.LOG_LEVEL === 'debug',
    entities: ['dist/entities/**/*.js', 'src/entities/**/*.ts'],
    migrations: ['dist/migrations/**/*.js', 'src/migrations/**/*.ts'],
    subscribers: ['dist/subscribers/**/*.js', 'src/subscribers/**/*.ts'],
    ssl: host !== 'localhost',
};
function createConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield typeorm_1.createConnection(params);
        return connection;
    });
}
exports.createConnection = createConnection;
//# sourceMappingURL=createConnection.js.map