import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cardapio } from '../cardapios/cardapios.entity';

@Injectable()
export class CardapiosService {
  constructor(
    @InjectRepository(Cardapio)
    private readonly cardapioRepository: Repository<Cardapio>,
  ) {}

  async findAll(): Promise<Cardapio[]> {
    return await this.cardapioRepository.find({ relations: ['criado_por'] });
  }

  async findOne(id: number): Promise<Cardapio> {
    return await this.cardapioRepository.findOne({
      where: { id_cardapio: id },
      relations: ['criado_por'],
    });
  }

  async create(data: Partial<Cardapio>): Promise<Cardapio> {
    const cardapio = this.cardapioRepository.create(data);
    return await this.cardapioRepository.save(cardapio);
  }

  async update(id: number, data: Partial<Cardapio>): Promise<Cardapio> {
    await this.cardapioRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.cardapioRepository.delete(id);
  }
}
