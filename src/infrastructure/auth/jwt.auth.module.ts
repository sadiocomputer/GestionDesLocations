import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TOKEN_SERVICE } from 'src/domaine/servives/token.service.interface';
import { JwtAuthService } from './jwt.auth.servive';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ default: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT') as string,
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  controllers: [],
  providers: [
    JwtStrategy,
    {
      provide: TOKEN_SERVICE,
      useClass: JwtAuthService,
    },
  ],
  exports: [
    {
      provide: TOKEN_SERVICE,
      useClass: JwtAuthService,
    },
  ],
})
export class JwtAuthModule {}
