"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMessage = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["ERROR"] = 404] = "ERROR";
    HttpStatus[HttpStatus["SUCCESS"] = 200] = "SUCCESS";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
var HttpMessage;
(function (HttpMessage) {
    HttpMessage["ERROR"] = "error none data";
    HttpMessage["SUCCESS"] = "server response done";
})(HttpMessage || (exports.HttpMessage = HttpMessage = {}));
//# sourceMappingURL=globalEnum.js.map