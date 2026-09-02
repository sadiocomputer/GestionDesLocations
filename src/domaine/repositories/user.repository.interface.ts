import { User } from '../entities/user.entity';
export interface IUser {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  motDepasse: string;
  role: string;
}

export interface IUserUpdate {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  motDepasse: string;
}
export interface IUserRepository {
  create(user: IUser): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  update(id: string, updateData: IUserUpdate): Promise<User>;
  delete(id: string): Promise<void>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
