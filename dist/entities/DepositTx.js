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
exports.DepositTx = void 0;
const ethers_1 = require("ethers");
const typeorm_1 = require("typeorm");
const shared_1 = require("./shared");
const Deposit_1 = require("./Deposit");
var Type;
(function (Type) {
    // redeeming
    Type["REDEEM_APPROVE_TBTC"] = "REDEEM_APPROVE_TBTC";
    Type["REDEEM_REDEMPTION_REQUEST"] = "REDEEM_REDEMPTION_REQUEST";
    Type["REDEEM_PROVIDE_REDEMPTION_SIG"] = "REDEEM_PROVIDE_REDEMPTION_SIG";
    Type["REDEEM_BTC_RELEASE"] = "REDEEM_BTC_RELEASE";
    // REDEEM_BTC_RECEPTION = 'REDEEM_BTC_RECEPTION', // TODO: remove
    Type["REDEEM_PROVIDE_REDEMPTION_PROOF"] = "REDEEM_PROVIDE_REDEMPTION_PROOF";
    // minting
    Type["MINT_CREATE_DEPOSIT"] = "MINT_CREATE_DEPOSIT";
    Type["MINT_RETRIEVE_PUBKEY"] = "MINT_RETRIEVE_PUBKEY";
    Type["MINT_FUND_BTC"] = "MINT_FUND_BTC";
    Type["MINT_PROVIDE_FUNDING_PROOF"] = "MINT_PROVIDE_FUNDING_PROOF";
    // MINT_APPROVE_AND_CALL_TDT = 'MINT_APPROVE_AND_CALL_TDT', // TODO: this may replace all the actions below
    Type["MINT_APPROVE_TDT"] = "MINT_APPROVE_TDT";
    Type["MINT_TDT_TO_TBTC"] = "MINT_TDT_TO_TBTC";
})(Type || (Type = {}));
var Status;
(function (Status) {
    Status["BROADCASTED"] = "BROADCASTED";
    Status["CONFIRMED"] = "CONFIRMED";
    Status["ERROR"] = "ERROR";
})(Status || (Status = {}));
let DepositTx = class DepositTx {
};
// TODO: improve this
// lame definitions to achieve property access via DepositTx.Status.CONFIRMED
// and type annotations via status: DepositTx['Status'] (DepositTx.Status would be better though)
DepositTx.Status = Status;
DepositTx.Type = Type;
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DepositTx.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne((_type) => Deposit_1.Deposit, { onDelete: 'CASCADE' }),
    __metadata("design:type", Deposit_1.Deposit)
], DepositTx.prototype, "deposit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DepositTx.prototype, "depositId", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DepositTx.prototype, "operationType", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], DepositTx.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ transformer: shared_1.lowercaseTransformer, nullable: true }),
    __metadata("design:type", String)
], DepositTx.prototype, "txHash", void 0);
__decorate([
    typeorm_1.Column(Object.assign(Object.assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
    __metadata("design:type", ethers_1.BigNumber)
], DepositTx.prototype, "txCostEthEquivalent", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DepositTx.prototype, "txCostUsdEquivalent", void 0);
__decorate([
    typeorm_1.Column(Object.assign(Object.assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
    __metadata("design:type", ethers_1.BigNumber)
], DepositTx.prototype, "txCostEthEquivalentWithFee", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DepositTx.prototype, "txCostUsdEquivalentWithFee", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], DepositTx.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], DepositTx.prototype, "updateDate", void 0);
DepositTx = __decorate([
    typeorm_1.Entity()
], DepositTx);
exports.DepositTx = DepositTx;
//# sourceMappingURL=DepositTx.js.map