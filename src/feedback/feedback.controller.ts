import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async criar(@Body() feedback: Partial<Feedback>): Promise<Feedback> {
    return this.feedbackService.criarFeedback(feedback);
  }

  @Get()
  async obterTodos(): Promise<Feedback[]> {
    return this.feedbackService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<Feedback> {
    return this.feedbackService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: number,
    @Body() dadosAtualizados: Partial<Feedback>,
  ): Promise<Feedback> {
    return this.feedbackService.atualizarFeedback(id, dadosAtualizados);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.feedbackService.deletarFeedback(id);
  }
}
