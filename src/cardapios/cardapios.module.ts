import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardapiosService } from './cardapios.service';
import { CardapiosController } from './cardapios.controller';
import { Cardapio } from '../cardapios/cardapios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cardapio])],
  controllers: [CardapiosController],
  providers: [CardapiosService],
})
export class CardapiosModule {}
