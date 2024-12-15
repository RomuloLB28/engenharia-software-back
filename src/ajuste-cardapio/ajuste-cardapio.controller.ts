import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AjusteCardapioService } from './ajuste-cardapio.service';
import { AjusteCardapio } from './ajuste-cardapio.entity';

@Controller('ajuste-cardapio')
export class AjusteCardapioController {
  constructor(private readonly ajusteCardapioService: AjusteCardapioService) {}

  @Post()
  async criar(@Body() ajuste: Partial<AjusteCardapio>): Promise<AjusteCardapio> {
    return this.ajusteCardapioService.criar(ajuste);
  }

  @Get()
  async obterTodos(): Promise<AjusteCardapio[]> {
    return this.ajusteCardapioService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<AjusteCardapio> {
    return this.ajusteCardapioService.obterPorId(id);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.ajusteCardapioService.deletar(id);
  }
}
