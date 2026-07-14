import { User } from 'src/domaine/entities';

export class UserResponseDto {
  id: string;
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  role: string;
  dateCreation: Date;
  dateModification: Date;

  static fromDomaine(user: User): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = user.id;
    dto.email = user.email;
    dto.nom = user.nom;
    dto.prenom = user.prenom;
    dto.telephone = user.telephone;
    dto.dateCreation = user.dateCreation;
    dto.dateModification = user.dateModification;

    return dto;
  }
}
