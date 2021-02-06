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
exports.Deposit = exports.Status = void 0;
var ethers_1 = require("ethers");
var typeorm_1 = require("typeorm");
var shared_1 = require("./shared");
var Operator_1 = require("./Operator");
var DepositTx_1 = require("./DepositTx");
// status codes from the Deposit contract
var Status;
(function (Status) {
    Status[Status["START"] = 0] = "START";
    // FUNDING FLOW
    Status[Status["AWAITING_SIGNER_SETUP"] = 1] = "AWAITING_SIGNER_SETUP";
    Status[Status["AWAITING_BTC_FUNDING_PROOF"] = 2] = "AWAITING_BTC_FUNDING_PROOF";
    // FAILED SETUP
    Status[Status["FAILED_SETUP"] = 3] = "FAILED_SETUP";
    // ACTIVE
    Status[Status["ACTIVE"] = 4] = "ACTIVE";
    // REDEMPTION FLOW
    Status[Status["AWAITING_WITHDRAWAL_SIGNATURE"] = 5] = "AWAITING_WITHDRAWAL_SIGNATURE";
    Status[Status["AWAITING_WITHDRAWAL_PROOF"] = 6] = "AWAITING_WITHDRAWAL_PROOF";
    Status[Status["REDEEMED"] = 7] = "REDEEMED";
    // SIGNER LIQUIDATION FLOW
    Status[Status["COURTESY_CALL"] = 8] = "COURTESY_CALL";
    Status[Status["FRAUD_LIQUIDATION_IN_PROGRESS"] = 9] = "FRAUD_LIQUIDATION_IN_PROGRESS";
    Status[Status["LIQUIDATION_IN_PROGRESS"] = 10] = "LIQUIDATION_IN_PROGRESS";
    Status[Status["LIQUIDATED"] = 11] = "LIQUIDATED";
})(Status = exports.Status || (exports.Status = {}));
var SystemStatus;
(function (SystemStatus) {
    SystemStatus["QUEUED_FOR_REDEMPTION"] = "QUEUED_FOR_REDEMPTION";
    SystemStatus["REDEEMING"] = "REDEEMING";
    SystemStatus["REDEEMED"] = "REDEEMED";
    SystemStatus["ERROR"] = "ERROR";
})(SystemStatus || (SystemStatus = {}));
var Deposit = /** @class */ (function () {
    function Deposit() {
    }
    Deposit_1 = Deposit;
    var Deposit_1;
    // TODO: improve this
    // lame definitions to achieve property access via Deposit.Status.REDEEMED
    // and type annotations via status: Deposit['Status'] (Deposit.Status would be better though)
    Deposit.Status = Status;
    Deposit.SystemStatus = SystemStatus;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Deposit.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (_type) { return Operator_1.Operator; }, function (operator) { return operator.deposits; }),
        __metadata("design:type", Array)
    ], Deposit.prototype, "operators", void 0);
    __decorate([
        typeorm_1.OneToMany(function (_type) { return DepositTx_1.DepositTx; }, function (depositOperation) { return depositOperation.deposit; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Deposit.prototype, "depositTxs", void 0);
    __decorate([
        typeorm_1.OneToOne(function (_type) { return Deposit_1; }, function (deposit) { return deposit.mintedDeposit; }, { nullable: true }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Deposit)
    ], Deposit.prototype, "mintedDeposit", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "mintedDepositId", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column({ transformer: shared_1.lowercaseTransformer }),
        __metadata("design:type", String)
    ], Deposit.prototype, "depositAddress", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column({ transformer: shared_1.lowercaseTransformer }),
        __metadata("design:type", String)
    ], Deposit.prototype, "keepAddress", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'int' }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "blockNumber", void 0);
    __decorate([
        typeorm_1.Column(shared_1.bigNumberColumnOptions),
        __metadata("design:type", ethers_1.BigNumber)
    ], Deposit.prototype, "lotSizeSatoshis", void 0);
    __decorate([
        typeorm_1.Column(shared_1.bigNumberColumnOptions),
        __metadata("design:type", ethers_1.BigNumber)
    ], Deposit.prototype, "bondedEth", void 0);
    __decorate([
        typeorm_1.Column(__assign(__assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
        __metadata("design:type", ethers_1.BigNumber)
    ], Deposit.prototype, "redemptionCostEthEquivalent", void 0);
    __decorate([
        typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "redemptionCostUsdEquivalent", void 0);
    __decorate([
        typeorm_1.Column(__assign(__assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
        __metadata("design:type", ethers_1.BigNumber)
    ], Deposit.prototype, "redemptionCostEthEquivalentWithFee", void 0);
    __decorate([
        typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "redemptionCostUsdEquivalentWithFee", void 0);
    __decorate([
        typeorm_1.Column({ type: 'smallint' }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "undercollateralizedThresholdPercent", void 0);
    __decorate([
        typeorm_1.Column({ length: 100, nullable: true }),
        __metadata("design:type", String)
    ], Deposit.prototype, "redemptionAddress", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'int', nullable: true }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "redemptionAddressIndex", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'varchar', length: 40 }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "status", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'smallint' }),
        __metadata("design:type", Number)
    ], Deposit.prototype, "statusCode", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'varchar', length: 40, nullable: true }),
        __metadata("design:type", String)
    ], Deposit.prototype, "systemStatus", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], Deposit.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Deposit.prototype, "createDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Deposit.prototype, "updateDate", void 0);
    Deposit = Deposit_1 = __decorate([
        typeorm_1.Entity()
    ], Deposit);
    return Deposit;
}());
exports.Deposit = Deposit;
//# sourceMappingURL=Deposit.js.map