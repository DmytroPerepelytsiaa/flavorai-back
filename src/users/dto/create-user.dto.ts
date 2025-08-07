import { IsDefined, IsEmail, Length, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(256)
  email: string;

  @IsDefined()
  @Length(6, 36)
  password: string;
}
