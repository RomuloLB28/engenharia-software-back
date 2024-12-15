import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AjusteCardapio } from './ajuste-cardapio.entity';
import { AjusteCardapioService } from './ajuste-cardapio.service';
import { AjusteCardapioController } from './ajuste-cardapio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AjusteCardapio])],
  providers: [AjusteCardapioService],
  controllers: [AjusteCardapioController],
})
export class AjusteCardapioModule {}
