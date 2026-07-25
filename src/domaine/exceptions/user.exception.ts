export class UserAlReadyExistsException extends Error {
  constructor(email: string) {
    super(`Un utilisateur avec l'email ${email} existe déjà`);
    this.name = 'UserAlReadyExistsException';
  }
}

export class UserNotFoundException extends Error {
  constructor(id: string) {
    super(`Utilisateur avec l'id ${id} est introuvable`);
    this.name = 'UserNotFoundException';
  }
}
