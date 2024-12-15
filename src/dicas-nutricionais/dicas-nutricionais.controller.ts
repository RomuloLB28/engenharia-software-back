import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DicasNutricionaisService } from './dicas-nutricionais.service';
import { DicasNutricionais } from './dicas-nutricionais.entity';

@Controller('dicas-nutricionais')
export class DicasNutricionaisController {
  constructor(private readonly dicasNutricionaisService: DicasNutricionaisService) {}

  @Post()
  async criar(@Body() dica: Partial<DicasNutricionais>): Promise<DicasNutricionais> {
    return this.dicasNutricionaisService.criarDica(dica);
  }

  @Get()
  async obterTodas(): Promise<DicasNutricionais[]> {
    return this.dicasNutricionaisService.obterTodas();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<DicasNutricionais> {
    return this.dicasNutricionaisService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: number,
    @Body() dadosAtualizados: Partial<DicasNutricionais>,
  ): Promise<DicasNutricionais> {
    return this.dicasNutricionaisService.atualizarDica(id, dadosAtualizados);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.dicasNutricionaisService.deletarDica(id);
  }
}
