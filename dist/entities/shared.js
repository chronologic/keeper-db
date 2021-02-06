"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowercaseTransformer = exports.bigNumberColumnOptions = void 0;
var ethers_1 = require("ethers");
var bigNumberTransformer = {
    from: function (dbValue) { return ethers_1.ethers.BigNumber.from(dbValue || '0'); },
    to: function (entityValue) { return (entityValue == null ? entityValue : entityValue.toString()); },
};
// uint256 max length in base-10 is 78 characters
exports.bigNumberColumnOptions = {
    type: 'numeric',
    precision: 78,
    scale: 0,
    transformer: bigNumberTransformer,
};
exports.lowercaseTransformer = {
    from: function (dbValue) { return dbValue; },
    to: function (entityValue) { return (entityValue == null ? entityValue : entityValue.toLowerCase()); },
};
//# sourceMappingURL=shared.js.map