import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ITokenService,
  TokenPayload,
} from 'src/domaine/servives/token.service.interface';

@Injectable()
export class JwtAuthService implements ITokenService {
  constructor(private readonly jwtservice: JwtService) {}
  generateAccessToken(payload: TokenPayload): Promise<string> {
    return this.jwtservice.signAsync(payload);
  }
}
