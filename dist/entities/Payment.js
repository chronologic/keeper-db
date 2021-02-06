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
exports.Payment = void 0;
var ethers_1 = require("ethers");
var typeorm_1 = require("typeorm");
var shared_1 = require("./shared");
var User_1 = require("./User");
var Status;
(function (Status) {
    Status["CONFIRMED"] = "CONFIRMED";
    Status["ERROR"] = "ERROR";
})(Status || (Status = {}));
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.Status = Status;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Payment.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (_type) { return User_1.User; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", User_1.User)
    ], Payment.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Payment.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column({ transformer: shared_1.lowercaseTransformer }),
        __metadata("design:type", String)
    ], Payment.prototype, "txHash", void 0);
    __decorate([
        typeorm_1.Column(shared_1.bigNumberColumnOptions),
        __metadata("design:type", ethers_1.BigNumber)
    ], Payment.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ length: 10 }),
        __metadata("design:type", String)
    ], Payment.prototype, "status", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'int' }),
        __metadata("design:type", Number)
    ], Payment.prototype, "blockNumber", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Payment.prototype, "createDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Payment.prototype, "updateDate", void 0);
    Payment = __decorate([
        typeorm_1.Entity()
    ], Payment);
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map