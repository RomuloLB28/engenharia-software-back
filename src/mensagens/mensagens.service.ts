import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensagens } from './mensagens.entity';

@Injectable()
export class MensagensService {
  constructor(
    @InjectRepository(Mensagens)
    private readonly mensagensRepository: Repository<Mensagens>,
  ) {}

  async criarMensagem(mensagem: Partial<Mensagens>): Promise<Mensagens> {
    const novaMensagem = this.mensagensRepository.create(mensagem);
    return this.mensagensRepository.save(novaMensagem);
  }

  async obterTodas(): Promise<Mensagens[]> {
    return this.mensagensRepository.find({ relations: ['usuario_responsavel'] });
  }

  async obterPorId(id: number): Promise<Mensagens> {
    const mensagem = await this.mensagensRepository.findOne({
      where: { id_mensagem: id },
      relations: ['usuario_responsavel'],
    });

    if (!mensagem) {
      throw new NotFoundException(`Mensagem com ID ${id} não encontrada`);
    }
    return mensagem;
  }

  async atualizarMensagem(id: number, dadosAtualizados: Partial<Mensagens>): Promise<Mensagens> {
    const mensagem = await this.obterPorId(id);
    Object.assign(mensagem, dadosAtualizados);
    return this.mensagensRepository.save(mensagem);
  }

  async deletarMensagem(id: number): Promise<void> {
    const resultado = await this.mensagensRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Mensagem com ID ${id} não encontrada`);
    }
  }
}
