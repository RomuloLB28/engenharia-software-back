import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { Mensagens } from './mensagens.entity';

@Controller('mensagens')
export class MensagensController {
  constructor(private readonly mensagensService: MensagensService) {}

  @Post()
  async criar(@Body() mensagem: Partial<Mensagens>): Promise<Mensagens> {
    return this.mensagensService.criarMensagem(mensagem);
  }

  @Get()
  async obterTodas(): Promise<Mensagens[]> {
    return this.mensagensService.obterTodas();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<Mensagens> {
    return this.mensagensService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: number,
    @Body() dadosAtualizados: Partial<Mensagens>,
  ): Promise<Mensagens> {
    return this.mensagensService.atualizarMensagem(id, dadosAtualizados);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.mensagensService.deletarMensagem(id);
  }
}
