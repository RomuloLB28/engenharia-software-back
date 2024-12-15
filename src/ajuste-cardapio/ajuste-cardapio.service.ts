import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AjusteCardapio } from './ajuste-cardapio.entity';

@Injectable()
export class AjusteCardapioService {
  constructor(
    @InjectRepository(AjusteCardapio)
    private readonly ajusteCardapioRepository: Repository<AjusteCardapio>,
  ) {}

  async criar(ajusteCardapio: Partial<AjusteCardapio>): Promise<AjusteCardapio> {
    const novoAjuste = this.ajusteCardapioRepository.create(ajusteCardapio);
    return this.ajusteCardapioRepository.save(novoAjuste);
  }

  async obterTodos(): Promise<AjusteCardapio[]> {
    return this.ajusteCardapioRepository.find({ relations: ['id_cardapio'] });
  }

  async obterPorId(id: number): Promise<AjusteCardapio> {
    const ajuste = await this.ajusteCardapioRepository.findOne({
      where: { id_ajuste: id },
      relations: ['id_cardapio'],
    });

    if (!ajuste) {
      throw new NotFoundException(`Ajuste com ID ${id} não encontrado.`);
    }

    return ajuste;
  }

  async deletar(id: number): Promise<void> {
    const resultado = await this.ajusteCardapioRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Ajuste com ID ${id} não encontrado.`);
    }
  }
}
