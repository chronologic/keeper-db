"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const winston_1 = require("winston");
const env_1 = require("./env");
// normally, winston transports catch all log levels up to a given level
// meaning e.g. info transport catches debug messages too, resulting in multiple messages for the same thing
// separate instances per log level solve that issue
// see: https://github.com/winstonjs/winston/issues/614
function createLogger(source) {
    const errorLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ level, message, timestamp, stack = '' }) => `${timestamp} ${level} [${source}] ${message} ${stack}`)),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source },
        level: env_1.LOG_LEVEL,
    });
    const infoLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf((_a) => {
            var { level, message, timestamp } = _a, rest = __rest(_a, ["level", "message", "timestamp"]);
            const formattedMessage = typeof message === 'object' ? JSON.stringify(message) : message;
            const extra = rest[Symbol.for('splat')];
            const formattedExtra = extra ? JSON.stringify(extra) : '';
            return `${timestamp} ${level} [${source}] ${formattedMessage} ${formattedExtra}`;
        })),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source },
        level: env_1.LOG_LEVEL,
    });
    const debugLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf((_a) => {
            var { level, message, timestamp } = _a, rest = __rest(_a, ["level", "message", "timestamp"]);
            const formattedMessage = typeof message === 'object' ? JSON.stringify(message, null, 2) : message;
            const extra = rest[Symbol.for('splat')];
            const formattedExtra = extra ? JSON.stringify(extra, null, 2) : '';
            return `${timestamp} ${level} [${source}] ${formattedMessage} ${formattedExtra}`;
        })),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source },
        level: env_1.LOG_LEVEL,
    });
    return {
        error: errorLogger.error.bind(errorLogger),
        info: infoLogger.info.bind(infoLogger),
        debug: debugLogger.debug.bind(debugLogger),
    };
}
exports.createLogger = createLogger;
const logger = createLogger('logger');
exports.default = logger;
//# sourceMappingURL=logger.js.map