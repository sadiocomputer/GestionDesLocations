import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domaine/entities';
import { IUser, IUserRepository, IUserUpdate } from 'src/domaine/repositories';
import { UserEntity } from '../../entities/user';
import { Repository } from 'typeorm';
import { UserMapper } from '../../mappers/user/user.mapper';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  update(id: string, updateData: IUserUpdate): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async create(data: IUser): Promise<User> {
    const ormEntity = this.userRepository.create(data);
    const saveData = await this.userRepository.save(ormEntity);
    return UserMapper.toDomaine(saveData);
  }
  async findAll(): Promise<User[]> {
    const ormEntity = await this.userRepository.find({
      order: { dateCreation: 'DESC' },
    });
    return ormEntity.map((entity) => UserMapper.toDomaine(entity));
  }
  async findByEmail(email: string): Promise<User | null> {
    const ormEntity = await this.userRepository.findOne({ where: { email } });
    return ormEntity ? UserMapper.toDomaine(ormEntity) : null;
  }
  async findById(id: string): Promise<User | null> {
    const ormEntity = await this.findById(id);
    return ormEntity ? UserMapper.toDomaine(ormEntity) : null;
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
