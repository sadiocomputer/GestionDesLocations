import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domaine/entities';
import { IUser, IUserRepository } from 'src/domaine/repositories';
import { UserEntity } from '../../entities/user';
import { Repository } from 'typeorm';
import { UserMapper } from '../../mappers/user/user.mapper';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(data: IUser): Promise<User> {
    const ormEntity = this.userRepository.create(data);
    const saveData = await this.userRepository.save(ormEntity);
    return UserMapper.toDomaine(saveData);
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User | null> {
    const ormEntity = await this.userRepository.findOne({ where: { email } });
    return ormEntity ? UserMapper.toDomaine(ormEntity) : null;
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
