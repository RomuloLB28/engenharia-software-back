import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RankingDesperdicioService } from './ranking-desperdicio.service';
import { RankingDesperdicio } from './ranking-desperdicio.entity';

@Controller('ranking-desperdicio')
export class RankingDesperdicioController {
  constructor(private readonly rankingService: RankingDesperdicioService) {}

  @Post()
  async criarOuAtualizar(@Body() ranking: Partial<RankingDesperdicio>): Promise<RankingDesperdicio> {
    return this.rankingService.criarOuAtualizar(ranking);
  }

  @Get()
  async obterTodos(): Promise<RankingDesperdicio[]> {
    return this.rankingService.obterTodos();
  }

  @Get(':turno')
  async obterPorTurno(@Param('turno') turno: 'manhã' | 'tarde' | 'noite'): Promise<RankingDesperdicio> {
    return this.rankingService.obterPorTurno(turno);
  }

  @Delete(':turno')
  async deletarPorTurno(@Param('turno') turno: 'manhã' | 'tarde' | 'noite'): Promise<void> {
    return this.rankingService.deletarPorTurno(turno);
  }
}
