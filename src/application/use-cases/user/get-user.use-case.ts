import { Inject, Injectable } from '@nestjs/common';
import { UserResponseDto } from 'src/application/dtos/user/user.response.dto';
import { UserNotFoundException } from 'src/domaine/exceptions/user.exception';
import { IUserRepository, USER_REPOSITORY } from 'src/domaine/repositories';

@Injectable()
export class GetUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new UserNotFoundException(id);
    }
    return UserResponseDto.fromDomaine(user);
  }
}
