import { UserEntity } from '../../entities/user';
import { User } from 'src/domaine/entities';

export class UserMapper {
  static toDomaine(ormEntity: UserEntity): User {
    return new User(
      ormEntity.id,
      ormEntity.nom,
      ormEntity.prenom,
      ormEntity.telephone,
      ormEntity.email,
      ormEntity.motDepasse,
      ormEntity.role,
      ormEntity.dateCreation,
      ormEntity.dateModification,
    );
  }
}
