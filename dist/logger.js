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
var winston_1 = require("winston");
var env_1 = require("./env");
// normally, winston transports catch all log levels up to a given level
// meaning e.g. info transport catches debug messages too, resulting in multiple messages for the same thing
// separate instances per log level solve that issue
// see: https://github.com/winstonjs/winston/issues/614
function createLogger(source) {
    var errorLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
            var level = _a.level, message = _a.message, timestamp = _a.timestamp, _b = _a.stack, stack = _b === void 0 ? '' : _b;
            return timestamp + " " + level + " [" + source + "] " + message + " " + stack;
        })),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source: source },
        level: env_1.LOG_LEVEL,
    });
    var infoLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
            var level = _a.level, message = _a.message, timestamp = _a.timestamp, rest = __rest(_a, ["level", "message", "timestamp"]);
            var formattedMessage = typeof message === 'object' ? JSON.stringify(message) : message;
            var extra = rest[Symbol.for('splat')];
            var formattedExtra = extra ? JSON.stringify(extra) : '';
            return timestamp + " " + level + " [" + source + "] " + formattedMessage + " " + formattedExtra;
        })),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source: source },
        level: env_1.LOG_LEVEL,
    });
    var debugLogger = winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
            var level = _a.level, message = _a.message, timestamp = _a.timestamp, rest = __rest(_a, ["level", "message", "timestamp"]);
            var formattedMessage = typeof message === 'object' ? JSON.stringify(message, null, 2) : message;
            var extra = rest[Symbol.for('splat')];
            var formattedExtra = extra ? JSON.stringify(extra, null, 2) : '';
            return timestamp + " " + level + " [" + source + "] " + formattedMessage + " " + formattedExtra;
        })),
        transports: [new winston_1.transports.Console()],
        defaultMeta: { source: source },
        level: env_1.LOG_LEVEL,
    });
    return {
        error: errorLogger.error.bind(errorLogger),
        info: infoLogger.info.bind(infoLogger),
        debug: debugLogger.debug.bind(debugLogger),
    };
}
exports.createLogger = createLogger;
var logger = createLogger('logger');
exports.default = logger;
//# sourceMappingURL=logger.js.map