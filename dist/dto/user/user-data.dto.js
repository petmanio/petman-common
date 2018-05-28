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
var enum_1 = require("../../enum");
var UserDataDto = /** @class */ (function () {
    function UserDataDto() {
    }
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", Number)
    ], UserDataDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: enum_1.Gender }),
        __metadata("design:type", String)
    ], UserDataDto.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], UserDataDto.prototype, "avatar", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], UserDataDto.prototype, "facebook", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], UserDataDto.prototype, "firstName", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], UserDataDto.prototype, "lastName", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], UserDataDto.prototype, "created", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], UserDataDto.prototype, "updated", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", Date)
    ], UserDataDto.prototype, "deleted", void 0);
    return UserDataDto;
}());
exports.UserDataDto = UserDataDto;
