import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { Relatorios } from './relatorios.entity';

@Controller('relatorios')
export class RelatoriosController {
  constructor(private readonly relatoriosService: RelatoriosService) {}

  @Post()
  async criar(@Body() relatorio: Partial<Relatorios>): Promise<Relatorios> {
    return this.relatoriosService.criar(relatorio);
  }

  @Get()
  async obterTodos(): Promise<Relatorios[]> {
    return this.relatoriosService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<Relatorios> {
    return this.relatoriosService.obterPorId(id);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.relatoriosService.deletar(id);
  }
}
