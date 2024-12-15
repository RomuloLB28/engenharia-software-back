import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RefeicoesService } from './refeicoes.service';

@Controller('refeicoes')
export class RefeicoesController {
  constructor(private readonly refeicoesService: RefeicoesService) {}

  @Get()
  findAll() {
    return this.refeicoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.refeicoesService.findOne(id);
  }

  @Post()
  create(@Body() body: { nome_refeicao: string; cardapioId: number }) {
    return this.refeicoesService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body: { nome_refeicao?: string; cardapioId?: number },
  ) {
    return this.refeicoesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.refeicoesService.remove(id);
  }
}
