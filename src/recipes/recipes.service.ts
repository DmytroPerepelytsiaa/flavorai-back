import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto, email: string) {
    return this.prisma.recipe.create({
      data: {
        ...createRecipeDto,
        userEmail: email,
      },
    });
  }
}
