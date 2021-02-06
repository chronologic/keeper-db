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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var ethers_1 = require("ethers");
var Payment_1 = require("./Payment");
var Operator_1 = require("./Operator");
var shared_1 = require("./shared");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (_type) { return Payment_1.Payment; }, function (payment) { return payment.user; }, { nullable: true }),
        __metadata("design:type", Array)
    ], User.prototype, "payments", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (_type) { return Operator_1.Operator; }, function (operator) { return operator.users; }),
        __metadata("design:type", Array)
    ], User.prototype, "operators", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column({ transformer: shared_1.lowercaseTransformer }),
        __metadata("design:type", String)
    ], User.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(__assign(__assign({}, shared_1.bigNumberColumnOptions), { nullable: true })),
        __metadata("design:type", ethers_1.BigNumber)
    ], User.prototype, "balanceEth", void 0);
    __decorate([
        typeorm_1.Column({ transformer: shared_1.lowercaseTransformer, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updateDate", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map