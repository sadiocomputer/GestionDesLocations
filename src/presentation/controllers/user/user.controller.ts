import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseGuards,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/user/create.user.dto';
import { UserResponseDto } from 'src/application/dtos/user/user.response.dto';
import { CreateUserUseCase } from 'src/application/use-cases/user';
import { UserExcetiponFilter } from 'src/presentation/filters/user.exception.filter';
import { GetAllUserUseCase } from '../../../application/use-cases/user/get-all-users.use-case';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUsersUseCase: GetAllUserUseCase,
  ) {}

  @UseFilters(UserExcetiponFilter)
  @Post('create')
  create(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    return this.createUserUseCase.execute(dto);
  }

  @Get('all')
  getallusers(): Promise<UserResponseDto[]> {
    return this.getAllUsersUseCase.execute();
  }
}
