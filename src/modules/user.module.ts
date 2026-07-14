import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUseCase } from 'src/application/use-cases/user';
import { USER_REPOSITORY } from 'src/domaine/repositories';
import { UserEntity } from 'src/infrastructure/persistences/entities/user';
import { UserRepository } from 'src/infrastructure/persistences/repositories/user';
import { UserController } from 'src/presentation/controllers/user';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
