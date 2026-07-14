import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  prenom: string;
  @IsString()
  @IsNotEmpty()
  nom: string;
  @IsString()
  @IsNotEmpty()
  telephone: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  motDepasse: string;
}
