"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = exports.createConnection = exports.EntityManager = void 0;
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "EntityManager", { enumerable: true, get: function () { return typeorm_1.EntityManager; } });
__exportStar(require("./entities"), exports);
var createConnection_1 = require("./createConnection");
Object.defineProperty(exports, "createConnection", { enumerable: true, get: function () { return createConnection_1.createConnection; } });
var getConnection_1 = require("./getConnection");
Object.defineProperty(exports, "getConnection", { enumerable: true, get: function () { return getConnection_1.getConnection; } });
//# sourceMappingURL=index.js.map