import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<D> implements NestInterceptor { //Use interceptor to synchronize response
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;

        //  status message
        let statusMessage = 'Success';
        if (statusCode >= 400 && statusCode < 500) {
          statusMessage = 'Client Error';
        } else if (statusCode >= 500) {
          statusMessage = 'Server Error';
        }

        // statusCode
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
          // Add more cases as needed
        }

        if (data && data.customMessage) {
          statusMessage = data.customMessage;
        }

        return {
          data: data || null,
          statusCode: statusCode,
          message: statusMessage,
        };
      }),
    );
  }
}
