import { UserRole } from '../enums';

export class User {
  constructor(
    public readonly id: string,
    public prenom: string,
    public nom: string,
    public telephone: string,
    public email: string,
    public motDepasse: string,
    public role: string,
    public dateCreation: Date,
    public dateModification: Date,
  ) {}

  modifierNom(nom: string, prenom: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.mettreAJourDateModification();
  }
  modifierEmail(email: string) {
    this.email = email;
    this.mettreAJourDateModification();
  }
  modifierTelephone(telephone: string) {
    this.telephone = telephone;
    this.mettreAJourDateModification();
  }
  changerMotDepasse(hash: string) {
    this.motDepasse = hash;
    this.mettreAJourDateModification();
  }

  modifierRole(role: UserRole) {
    this.role = role;
    this.mettreAJourDateModification();
  }

  private mettreAJourDateModification() {
    this.dateModification = new Date();
  }
}
