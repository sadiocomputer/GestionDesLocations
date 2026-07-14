import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/user/create.user.dto';
import { UserResponseDto } from 'src/application/dtos/user/user.response.dto';
import { UserAlReadyExistsException } from 'src/domaine/exceptions/user.exception';
import { USER_REPOSITORY, IUserRepository } from 'src/domaine/repositories';
import * as argon2 from 'argon2';
import { UserRole } from 'src/domaine/enums';
@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<UserResponseDto> {
    const existingEmail = await this.userRepository.findByEmail(dto.email);

    if (existingEmail) {
      throw new UserAlReadyExistsException(dto.email);
    }
    const hashedPassword = await argon2.hash(dto.motDepasse);
    const user = await this.userRepository.create({
      email: dto.email,
      motDepasse: hashedPassword,
      nom: dto.nom,
      prenom: dto.prenom,
      role: UserRole.PROPRIETAIRE,
      telephone: dto.telephone,
    });

    return UserResponseDto.fromDomaine(user);
  }
}
