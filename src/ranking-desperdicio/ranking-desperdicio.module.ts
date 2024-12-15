import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankingDesperdicio } from './ranking-desperdicio.entity';
import { RankingDesperdicioService } from './ranking-desperdicio.service';
import { RankingDesperdicioController } from './ranking-desperdicio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RankingDesperdicio])],
  providers: [RankingDesperdicioService],
  controllers: [RankingDesperdicioController],
})
export class RankingDesperdicioModule {}
