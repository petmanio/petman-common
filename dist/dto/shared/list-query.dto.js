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
var class_validator_1 = require("class-validator");
var ListQueryDto = /** @class */ (function () {
    function ListQueryDto() {
    }
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        class_validator_1.IsNumberString(),
        __metadata("design:type", Object)
    ], ListQueryDto.prototype, "offset", void 0);
    __decorate([
        swagger_1.ApiModelProperty({ type: Number }),
        class_validator_1.IsNumberString(),
        __metadata("design:type", Object)
    ], ListQueryDto.prototype, "limit", void 0);
    return ListQueryDto;
}());
exports.ListQueryDto = ListQueryDto;
