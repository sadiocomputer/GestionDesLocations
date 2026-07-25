import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from 'src/domaine/servives/token.service.interface';

export interface Authenticator {
  id: string;
  email: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT') as string,
    });
  }

  validate(payload: TokenPayload): Authenticator {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
