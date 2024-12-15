import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RankingDesperdicio } from './ranking-desperdicio.entity';

@Injectable()
export class RankingDesperdicioService {
  constructor(
    @InjectRepository(RankingDesperdicio)
    private readonly rankingRepository: Repository<RankingDesperdicio>,
  ) {}

  async criarOuAtualizar(ranking: Partial<RankingDesperdicio>): Promise<RankingDesperdicio> {
    const registroExistente = await this.rankingRepository.findOne({
      where: { id_turno: ranking.id_turno },
    });

    if (registroExistente) {
      Object.assign(registroExistente, ranking);
      return this.rankingRepository.save(registroExistente);
    }

    const novoRanking = this.rankingRepository.create(ranking);
    return this.rankingRepository.save(novoRanking);
  }

  async obterTodos(): Promise<RankingDesperdicio[]> {
    return this.rankingRepository.find({ relations: ['usuario_responsavel'] });
  }

  async obterPorTurno(turno: 'manhã' | 'tarde' | 'noite'): Promise<RankingDesperdicio> {
    const ranking = await this.rankingRepository.findOne({
      where: { id_turno: turno },
      relations: ['usuario_responsavel'],
    });

    if (!ranking) {
      throw new NotFoundException(`Ranking para o turno ${turno} não encontrado.`);
    }

    return ranking;
  }

  async deletarPorTurno(turno: 'manhã' | 'tarde' | 'noite'): Promise<void> {
    const resultado = await this.rankingRepository.delete(turno);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Ranking para o turno ${turno} não encontrado.`);
    }
  }
}
