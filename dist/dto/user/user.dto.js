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
var lodash_1 = require("lodash");
var class_transformer_1 = require("class-transformer");
var lib_1 = require("../../lib");
var enum_1 = require("../../enum");
var user_data_dto_1 = require("./user-data.dto");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: String }),
        __metadata("design:type", String)
    ], UserDto.prototype, "email", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", String)
    ], UserDto.prototype, "password", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: user_data_dto_1.UserDataDto }),
        class_transformer_1.Type(lib_1.dtoGetter(user_data_dto_1.UserDataDto)),
        class_transformer_1.Transform(function (userData, _a) {
            var authProviders = _a.authProviders;
            var fbAuthProvider = lodash_1.find(authProviders, function (provider) { return provider.type === enum_1.AuthProviderType.FACEBOOK; });
            if (fbAuthProvider) {
                userData.avatar = userData.avatar || lib_1.getUserFbAvatarByFbId(fbAuthProvider.externalId);
                userData.facebook = userData.facebook || lib_1.getFacebookById(fbAuthProvider.externalId);
            }
            return userData;
        }, { groups: ['api'] }),
        __metadata("design:type", user_data_dto_1.UserDataDto)
    ], UserDto.prototype, "userData", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", Object)
    ], UserDto.prototype, "authProviders", void 0);
    __decorate([
        class_transformer_1.Type(lib_1.dtoGetter(UserDto)),
        __metadata("design:type", Array)
    ], UserDto.prototype, "businessUsers", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], UserDto.prototype, "created", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Date }),
        __metadata("design:type", Date)
    ], UserDto.prototype, "updated", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", Date)
    ], UserDto.prototype, "deleted", void 0);
    return UserDto;
}());
exports.UserDto = UserDto;
