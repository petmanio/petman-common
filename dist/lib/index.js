"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoGetter = function (dto) {
    return function () {
        return dto;
    };
};
exports.getUserFbAvatarByFbId = function (facebookId) {
    return "https://graph.facebook.com/" + facebookId + "/picture?type=normal";
};
exports.getFacebookById = function (facebookId) {
    return "https://facebook.com/" + facebookId;
};
