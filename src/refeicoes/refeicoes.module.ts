import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refeicao } from '../refeicoes/refeicoes.entity';
import { RefeicoesService } from './refeicoes.service';
import { RefeicoesController } from './refeicoes.controller';
import { CardapiosModule } from '../cardapios/cardapios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Refeicao]), CardapiosModule],
  providers: [RefeicoesService],
  controllers: [RefeicoesController],
  exports: [RefeicoesService],
})
export class RefeicoesModule {}
