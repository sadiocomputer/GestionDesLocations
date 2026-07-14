import { UserRole } from 'src/domaine/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  telephone: string;
  @Column()
  email: string;
  @Column()
  motDepasse: string;
  @Column({ type: 'enum', enum: UserRole, default: UserRole.PROPRIETAIRE })
  role: string;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  dateCreation: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  dateModification: Date;
}
