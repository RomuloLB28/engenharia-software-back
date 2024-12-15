import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RefeicaoIngredientesService } from '../refeicao-ingredientes/refeicao-ingrediente.service';
import { RefeicaoIngredientes } from './refeicao-ingredientes.entity';

@Controller('refeicao-ingredientes')
export class RefeicaoIngredientesController {
  constructor(private readonly refeicaoIngredientesService: RefeicaoIngredientesService) {}

  @Get()
  async findAll(): Promise<RefeicaoIngredientes[]> {
    return this.refeicaoIngredientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RefeicaoIngredientes> {
    return this.refeicaoIngredientesService.findOne(id);
  }

  @Post()
  async create(@Body() data: { refeicaoId: number; ingredienteId: number }): Promise<RefeicaoIngredientes> {
    return this.refeicaoIngredientesService.create(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.refeicaoIngredientesService.remove(id);
  }
}
