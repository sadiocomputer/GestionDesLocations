import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { AuthResponseDto } from 'src/application/dtos/user/auth.response.dto';
import { UserAuthDto } from 'src/application/dtos/user/user.auth.dto';
import { AuthUserUseCase } from 'src/application/use-cases/user/auth-user.use-case';
import { AuthExceptionFilter } from 'src/presentation/filters/auth.exception.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authusecase: AuthUserUseCase) {}

  @UseFilters(AuthExceptionFilter)
  @Post('login')
  login(@Body() dto: UserAuthDto): Promise<AuthResponseDto> {
    return this.authusecase.execute(dto);
  }
}
