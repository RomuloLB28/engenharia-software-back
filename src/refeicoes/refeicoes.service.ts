import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refeicao } from '../refeicoes/refeicoes.entity';
import { Cardapio } from 'src/cardapios/cardapios.entity';

@Injectable()
export class RefeicoesService {
  remove(id: number) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Refeicao)
    private readonly refeicaoRepository: Repository<Refeicao>,
    @InjectRepository(Cardapio)
    private readonly cardapioRepository: Repository<Cardapio>,
    ){}
      

  async findAll(): Promise<Refeicao[]> {
    return this.refeicaoRepository.find({ relations: ['cardapio'] });
  }

  async findOne(id: number): Promise<Refeicao> {
    const refeicao = await this.refeicaoRepository.findOne({
      where: { id_refeicao: id },
      relations: ['cardapio'],
    });
    if (!refeicao) {
      throw new NotFoundException(`Refeição com ID ${id} não encontrada`);
    }
    return refeicao;
  }

  async create(data: { nome_refeicao: string; cardapioId: number }): Promise<Refeicao> {
    const refeicao = this.refeicaoRepository.create({
      nome_refeicao: data.nome_refeicao,
      cardapio: { id_cardapio: data.cardapioId },
    });
    return this.refeicaoRepository.save(refeicao);
  }

  async update(
    id: number,
    data: { nome_refeicao?: string; cardapioId?: number },
  ): Promise<Refeicao> {
    const refeicao = await this.findOne(id);
  
    if (data.nome_refeicao) refeicao.nome_refeicao = data.nome_refeicao;
  
    if (data.cardapioId) {
      const cardapio = await this.cardapioRepository.findOne({
        where: { id_cardapio: data.cardapioId },
      });
      if (!cardapio) {
        throw new NotFoundException(`Cardápio com ID ${data.cardapioId} não encontrado`);
      }
      refeicao.cardapio = cardapio;
    }
  
    return this.refeicaoRepository.save(refeicao);
  }
  
}

