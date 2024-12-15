import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefeicaoIngredientes } from './refeicao-ingredientes.entity';
import { Refeicao } from '../refeicoes/refeicoes.entity';
import { Ingrediente } from '../ingredientes/ingredientes.entity';

@Injectable()
export class RefeicaoIngredientesService {
  constructor(
    @InjectRepository(RefeicaoIngredientes)
    private readonly refeicaoIngredientesRepository: Repository<RefeicaoIngredientes>,
  ) {}

  async findAll(): Promise<RefeicaoIngredientes[]> {
    return this.refeicaoIngredientesRepository.find({
      relations: ['refeicao', 'ingrediente'],
    });
  }

  async findOne(id: number): Promise<RefeicaoIngredientes> {
    const refeicaoIngrediente = await this.refeicaoIngredientesRepository.findOne({
      where: { id_refeicao_ingrediente: id },
      relations: ['refeicao', 'ingrediente'],
    });

    if (!refeicaoIngrediente) {
      throw new NotFoundException(`Associação com ID ${id} não encontrada`);
    }

    return refeicaoIngrediente;
  }

  async create(data: { refeicaoId: number; ingredienteId: number }): Promise<RefeicaoIngredientes> {
    const refeicaoIngrediente = this.refeicaoIngredientesRepository.create({
      refeicao: { id_refeicao: data.refeicaoId } as Refeicao,
      ingrediente: { id_ingrediente: data.ingredienteId } as Ingrediente,
    });

    return this.refeicaoIngredientesRepository.save(refeicaoIngrediente);
  }

  async remove(id: number): Promise<void> {
    const refeicaoIngrediente = await this.findOne(id);
    await this.refeicaoIngredientesRepository.remove(refeicaoIngrediente);
  }
}
