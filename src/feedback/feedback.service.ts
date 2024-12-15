import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  async criarFeedback(feedback: Partial<Feedback>): Promise<Feedback> {
    const novoFeedback = this.feedbackRepository.create(feedback);
    return this.feedbackRepository.save(novoFeedback);
  }

  async obterTodos(): Promise<Feedback[]> {
    return this.feedbackRepository.find({ relations: ['id_usuario', 'id_cardapio'] });
  }

  async obterPorId(id: number): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne({
      where: { id_feedback: id },
      relations: ['id_usuario', 'id_cardapio'],
    });

    if (!feedback) {
      throw new NotFoundException(`Feedback com ID ${id} não encontrado`);
    }
    return feedback;
  }

  async atualizarFeedback(id: number, dadosAtualizados: Partial<Feedback>): Promise<Feedback> {
    const feedback = await this.obterPorId(id);
    Object.assign(feedback, dadosAtualizados);
    return this.feedbackRepository.save(feedback);
  }

  async deletarFeedback(id: number): Promise<void> {
    const resultado = await this.feedbackRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Feedback com ID ${id} não encontrado`);
    }
  }
}
