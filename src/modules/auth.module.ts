import { Module } from '@nestjs/common';
import { JwtAuthModule } from 'src/infrastructure/auth/jwt.auth.module';
import { AuthUserUseCase } from '../application/use-cases/user/auth-user.use-case';
import { UserModule } from './user.module';
import { AuthController } from 'src/presentation/controllers/user/auth.controller';

@Module({
  imports: [UserModule, JwtAuthModule],
  controllers: [AuthController],
  providers: [AuthUserUseCase],
})
export class AuthModule {}
