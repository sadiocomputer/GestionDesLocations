import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUseCase } from 'src/application/use-cases/user';
import { GetAllUserUseCase } from 'src/application/use-cases/user/get-all-users.use-case';
import { GetUserUseCase } from 'src/application/use-cases/user/get-user.use-case';
import { USER_REPOSITORY } from 'src/domaine/repositories';
import { UserEntity } from 'src/infrastructure/persistences/entities/user';
import { UserRepository } from 'src/infrastructure/persistences/repositories/user';
import { UserController } from 'src/presentation/controllers/user';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUserUseCase,
    GetAllUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
