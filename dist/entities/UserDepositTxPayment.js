"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDepositTxPayment = void 0;
var ethers_1 = require("ethers");
var typeorm_1 = require("typeorm");
var shared_1 = require("./shared");
var User_1 = require("./User");
var DepositTx_1 = require("./DepositTx");
var UserDepositTxPayment = /** @class */ (function () {
    function UserDepositTxPayment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserDepositTxPayment.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (_type) { return User_1.User; }, { onDelete: 'SET NULL', nullable: true }),
        __metadata("design:type", User_1.User)
    ], UserDepositTxPayment.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], UserDepositTxPayment.prototype, "userId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (_type) { return DepositTx_1.DepositTx; }, { onDelete: 'SET NULL', nullable: true }),
        __metadata("design:type", DepositTx_1.DepositTx)
    ], UserDepositTxPayment.prototype, "depositTx", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], UserDepositTxPayment.prototype, "depositTxId", void 0);
    __decorate([
        typeorm_1.Column(__assign(__assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
        __metadata("design:type", ethers_1.BigNumber)
    ], UserDepositTxPayment.prototype, "txCostEthEquivalent", void 0);
    __decorate([
        typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
        __metadata("design:type", Number)
    ], UserDepositTxPayment.prototype, "txCostUsdEquivalent", void 0);
    __decorate([
        typeorm_1.Column(__assign(__assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
        __metadata("design:type", ethers_1.BigNumber)
    ], UserDepositTxPayment.prototype, "txCostEthEquivalentWithFee", void 0);
    __decorate([
        typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
        __metadata("design:type", Number)
    ], UserDepositTxPayment.prototype, "txCostUsdEquivalentWithFee", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], UserDepositTxPayment.prototype, "createDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], UserDepositTxPayment.prototype, "updateDate", void 0);
    UserDepositTxPayment = __decorate([
        typeorm_1.Entity()
    ], UserDepositTxPayment);
    return UserDepositTxPayment;
}());
exports.UserDepositTxPayment = UserDepositTxPayment;
//# sourceMappingURL=UserDepositTxPayment.js.map