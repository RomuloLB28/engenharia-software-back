import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CardapiosService } from './cardapios.service';
import { Cardapio } from '../cardapios/cardapios.entity';

@Controller('cardapios')
export class CardapiosController {
  constructor(private readonly cardapiosService: CardapiosService) {}

  @Get()
  async findAll(): Promise<Cardapio[]> {
    return await this.cardapiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cardapio> {
    return await this.cardapiosService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<Cardapio>): Promise<Cardapio> {
    return await this.cardapiosService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Cardapio>): Promise<Cardapio> {
    return await this.cardapiosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.cardapiosService.delete(id);
  }
}
