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
var walker_dto_1 = require("./walker.dto");
var WalkerListDto = /** @class */ (function () {
    function WalkerListDto() {
    }
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        __metadata("design:type", Object)
    ], WalkerListDto.prototype, "total", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: walker_dto_1.WalkerDto, isArray: true }),
        class_transformer_1.Type(lib_1.dtoGetter(walker_dto_1.WalkerDto)),
        __metadata("design:type", Array)
    ], WalkerListDto.prototype, "list", void 0);
    return WalkerListDto;
}());
exports.WalkerListDto = WalkerListDto;
