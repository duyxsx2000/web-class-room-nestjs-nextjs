"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)(data => {
            const response = context.switchToHttp().getResponse();
            const statusCode = response.statusCode;
            let statusMessage = 'Success';
            if (statusCode >= 400 && statusCode < 500) {
                statusMessage = 'Client Error';
            }
            else if (statusCode >= 500) {
                statusMessage = 'Server Error';
            }
            switch (statusCode) {
                case 200:
                    statusMessage = 'Request Successful';
                    break;
                case 201:
                    statusMessage = 'Resource Created';
                    break;
                case 400:
                    statusMessage = 'Bad Request';
                    break;
                case 401:
                    statusMessage = 'Unauthorized';
                    break;
                case 403:
                    statusMessage = 'Forbidden';
                    break;
                case 404:
                    statusMessage = 'Not Found';
                    break;
                case 500:
                    statusMessage = 'Internal Server Error';
                    break;
            }
            if (data && data.customMessage) {
                statusMessage = data.customMessage;
            }
            return {
                data: data || null,
                statusCode: statusCode,
                message: statusMessage,
            };
        }));
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map