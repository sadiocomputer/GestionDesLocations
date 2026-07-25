import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { InvalidCredentialsException } from 'src/domaine/exceptions/invalid.credential';

@Catch(InvalidCredentialsException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: InvalidCredentialsException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(HttpStatus.UNAUTHORIZED).json({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: exception.message,
    });
  }
}
