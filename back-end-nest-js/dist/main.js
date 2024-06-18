"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    app.listen(3001, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map