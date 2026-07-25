import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UserAlReadyExistsException } from 'src/domaine/exceptions/user.exception';
@Catch(UserAlReadyExistsException)
export class UserExcetiponFilter implements ExceptionFilter {
  catch(exception: UserAlReadyExistsException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof UserAlReadyExistsException
        ? HttpStatus.CONFLICT
        : HttpStatus.NOT_FOUND;
    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
