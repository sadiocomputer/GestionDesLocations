import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/user/create.user.dto';
import { UserResponseDto } from 'src/application/dtos/user/user.response.dto';
import { CreateUserUseCase } from 'src/application/use-cases/user';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('create')
  create(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    return this.createUserUseCase.execute(dto);
  }
}
