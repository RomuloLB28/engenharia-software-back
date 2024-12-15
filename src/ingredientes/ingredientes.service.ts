import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingrediente } from './ingredientes.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}

  async findAll(): Promise<Ingrediente[]> {
    return this.ingredienteRepository.find({ relations: ['refeicoes'] });
  }

  async findOne(id: number): Promise<Ingrediente> {
    const ingrediente = await this.ingredienteRepository.findOne({
      where: { id_ingrediente: id },
      relations: ['refeicoes'],
    });
    if (!ingrediente) {
      throw new NotFoundException(`Ingrediente com ID ${id} não encontrado`);
    }
    return ingrediente;
  }

  async create(data: { nome_ingrediente: string; info_nutricional?: string }): Promise<Ingrediente> {
    const ingrediente = this.ingredienteRepository.create(data);
    return this.ingredienteRepository.save(ingrediente);
  }

  async update(
    id: number,
    data: { nome_ingrediente?: string; info_nutricional?: string },
  ): Promise<Ingrediente> {
    const ingrediente = await this.findOne(id);

    if (data.nome_ingrediente) ingrediente.nome_ingrediente = data.nome_ingrediente;
    if (data.info_nutricional) ingrediente.info_nutricional = data.info_nutricional;

    return this.ingredienteRepository.save(ingrediente);
  }

  async remove(id: number): Promise<void> {
    const ingrediente = await this.findOne(id);
    await this.ingredienteRepository.remove(ingrediente);
  }
}
