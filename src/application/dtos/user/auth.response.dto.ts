import { User } from 'src/domaine/entities';

export class AuthResponseDto {
  accessToken: string;
  user: {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    role: string;
  };
  static fromDomaine(user: User, accesToken: string): AuthResponseDto {
    const dto = new AuthResponseDto();
    dto.accessToken = accesToken;
    dto.user = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      telephone: user.telephone,
      role: user.role,
    };
    return dto;
  }
}
