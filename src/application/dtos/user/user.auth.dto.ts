import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserAuthDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'le mot de passe doit avoir au moins 6 carctères' })
  motDepasse: string;
}
