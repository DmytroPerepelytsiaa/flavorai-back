import {
  IsString,
  IsEnum,
  IsNumber,
  IsOptional,
  Min,
  Max,
  MaxLength,
  Length,
} from 'class-validator';

export enum RecipeDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export class CreateRecipeDto {
  @IsString()
  @Length(2, 90)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(360)
  description?: string;

  @IsString()
  @Length(2, 360)
  instructions: string;

  @IsNumber()
  @Min(1)
  @Max(9999)
  prepTime: number;

  @IsEnum(RecipeDifficulty)
  difficulty: RecipeDifficulty;

  @IsString()
  @Length(2, 360)
  ingredients: string;
}
