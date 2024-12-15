import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relatorios } from './relatorios.entity';

@Injectable()
export class RelatoriosService {
  constructor(
    @InjectRepository(Relatorios)
    private readonly relatoriosRepository: Repository<Relatorios>,
  ) {}

  async criar(relatorio: Partial<Relatorios>): Promise<Relatorios> {
    const novoRelatorio = this.relatoriosRepository.create(relatorio);
    return this.relatoriosRepository.save(novoRelatorio);
  }

  async obterTodos(): Promise<Relatorios[]> {
    return this.relatoriosRepository.find({ relations: ['id_cardapio', 'id_usuario'] });
  }

  async obterPorId(id: number): Promise<Relatorios> {
    const relatorio = await this.relatoriosRepository.findOne({
      where: { id_relatorio: id },
      relations: ['id_cardapio', 'id_usuario'],
    });

    if (!relatorio) {
      throw new NotFoundException(`Relatório com ID ${id} não encontrado.`);
    }

    return relatorio;
  }

  async deletar(id: number): Promise<void> {
    const resultado = await this.relatoriosRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Relatório com ID ${id} não encontrado.`);
    }
  }
}
