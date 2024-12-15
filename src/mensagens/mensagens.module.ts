import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagens } from './mensagens.entity';
import { MensagensService } from './mensagens.service';
import { MensagensController } from './mensagens.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mensagens])],
  providers: [MensagensService],
  controllers: [MensagensController],
})
export class MensagensModule {}
