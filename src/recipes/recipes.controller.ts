import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { AuthGuard } from '../common/guards';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() dto: CreateRecipeDto, @Req() req) {
    const email = req.user.email;
    return this.recipesService.create(dto, email);
  }
}
