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
exports.Operator = void 0;
const typeorm_1 = require("typeorm");
const shared_1 = require("./shared");
const Deposit_1 = require("./Deposit");
const User_1 = require("./User");
let Operator = class Operator {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Operator.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany((_type) => User_1.User, (user) => user.operators),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Operator.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany((_type) => Deposit_1.Deposit, (deposit) => deposit.operators),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Operator.prototype, "deposits", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.Column({ transformer: shared_1.lowercaseTransformer }),
    __metadata("design:type", String)
], Operator.prototype, "address", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Operator.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Operator.prototype, "updateDate", void 0);
Operator = __decorate([
    typeorm_1.Entity()
], Operator);
exports.Operator = Operator;
//# sourceMappingURL=Operator.js.map