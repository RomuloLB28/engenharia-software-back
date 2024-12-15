import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DicasNutricionais } from './dicas-nutricionais.entity';

@Injectable()
export class DicasNutricionaisService {
  constructor(
    @InjectRepository(DicasNutricionais)
    private readonly dicasNutricionaisRepository: Repository<DicasNutricionais>,
  ) {}

  async criarDica(dica: Partial<DicasNutricionais>): Promise<DicasNutricionais> {
    const novaDica = this.dicasNutricionaisRepository.create(dica);
    return this.dicasNutricionaisRepository.save(novaDica);
  }

  async obterTodas(): Promise<DicasNutricionais[]> {
    return this.dicasNutricionaisRepository.find({ relations: ['id_nutricionista'] });
  }

  async obterPorId(id: number): Promise<DicasNutricionais> {
    const dica = await this.dicasNutricionaisRepository.findOne({
      where: { id_dica: id },
      relations: ['id_nutricionista'],
    });

    if (!dica) {
      throw new NotFoundException(`Dica com ID ${id} não encontrada`);
    }
    return dica;
  }

  async atualizarDica(id: number, dadosAtualizados: Partial<DicasNutricionais>): Promise<DicasNutricionais> {
    const dica = await this.obterPorId(id);
    Object.assign(dica, dadosAtualizados);
    return this.dicasNutricionaisRepository.save(dica);
  }

  async deletarDica(id: number): Promise<void> {
    const resultado = await this.dicasNutricionaisRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Dica com ID ${id} não encontrada`);
    }
  }
}
