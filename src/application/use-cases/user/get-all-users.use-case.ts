import { Injectable, Inject } from '@nestjs/common';
import { UserResponseDto } from 'src/application/dtos/user/user.response.dto';
import { IUserRepository, USER_REPOSITORY } from 'src/domaine/repositories';

@Injectable()
export class GetAllUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}

  async execute(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => UserResponseDto.fromDomaine(user));
  }
}
