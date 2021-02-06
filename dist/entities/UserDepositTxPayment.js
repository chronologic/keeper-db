"use strict";
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
const ethers_1 = require("ethers");
const typeorm_1 = require("typeorm");
const shared_1 = require("./shared");
const User_1 = require("./User");
const DepositTx_1 = require("./DepositTx");
let UserDepositTxPayment = class UserDepositTxPayment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserDepositTxPayment.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne((_type) => User_1.User, { onDelete: 'SET NULL', nullable: true }),
    __metadata("design:type", User_1.User)
], UserDepositTxPayment.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], UserDepositTxPayment.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne((_type) => DepositTx_1.DepositTx, { onDelete: 'SET NULL', nullable: true }),
    __metadata("design:type", DepositTx_1.DepositTx)
], UserDepositTxPayment.prototype, "depositTx", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], UserDepositTxPayment.prototype, "depositTxId", void 0);
__decorate([
    typeorm_1.Column(Object.assign(Object.assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
    __metadata("design:type", ethers_1.BigNumber)
], UserDepositTxPayment.prototype, "txCostEthEquivalent", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], UserDepositTxPayment.prototype, "txCostUsdEquivalent", void 0);
__decorate([
    typeorm_1.Column(Object.assign(Object.assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
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
exports.UserDepositTxPayment = UserDepositTxPayment;
//# sourceMappingURL=UserDepositTxPayment.js.map