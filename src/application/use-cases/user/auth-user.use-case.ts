import { Inject, Injectable } from '@nestjs/common';
import { UserAuthDto } from 'src/application/dtos/user/user.auth.dto';
import { InvalidCredentialsException } from 'src/domaine/exceptions/invalid.credential';
import { IUserRepository, USER_REPOSITORY } from 'src/domaine/repositories';
import * as argon2 from 'argon2';
import {
  ITokenService,
  TOKEN_SERVICE,
} from 'src/domaine/servives/token.service.interface';
import { AuthResponseDto } from 'src/application/dtos/user/auth.response.dto';

@Injectable()
export class AuthUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(TOKEN_SERVICE) private readonly tokenService: ITokenService,
  ) {}
  async execute(dto: UserAuthDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(dto.email);

    if (!user) {
      throw new InvalidCredentialsException();
    }
    const isPasswordInvalid = await argon2.verify(
      user.motDepasse,
      dto.motDepasse,
    );

    if (!isPasswordInvalid) {
      throw new InvalidCredentialsException();
    }
    const access_token = await this.tokenService.generateAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return AuthResponseDto.fromDomaine(user, access_token);
  }
}
