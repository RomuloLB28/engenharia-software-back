import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { Ingrediente } from './ingredientes.entity';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Get()
  async findAll(): Promise<Ingrediente[]> {
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ingrediente> {
    return this.ingredientesService.findOne(id);
  }

  @Post()
  async create(@Body() data: { nome_ingrediente: string; info_nutricional?: string }): Promise<Ingrediente> {
    return this.ingredientesService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: { nome_ingrediente?: string; info_nutricional?: string },
  ): Promise<Ingrediente> {
    return this.ingredientesService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.ingredientesService.remove(id);
  }
}
