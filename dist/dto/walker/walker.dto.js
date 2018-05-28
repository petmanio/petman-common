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
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var lib_1 = require("../../lib");
var user_dto_1 = require("../user/user.dto");
var WalkerDto = /** @class */ (function () {
    function WalkerDto() {
    }
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        __metadata("design:type", Number)
    ], WalkerDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], WalkerDto.prototype, "text", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        __metadata("design:type", Number)
    ], WalkerDto.prototype, "price", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: user_dto_1.UserDto }),
        class_transformer_1.Type(lib_1.dtoGetter(user_dto_1.UserDto)),
        __metadata("design:type", user_dto_1.UserDto)
    ], WalkerDto.prototype, "user", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Boolean }),
        __metadata("design:type", Boolean)
    ], WalkerDto.prototype, "isOwner", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], WalkerDto.prototype, "created", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], WalkerDto.prototype, "updated", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", Date)
    ], WalkerDto.prototype, "deleted", void 0);
    return WalkerDto;
}());
exports.WalkerDto = WalkerDto;
