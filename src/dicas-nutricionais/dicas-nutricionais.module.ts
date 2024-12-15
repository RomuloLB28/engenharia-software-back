import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DicasNutricionais } from './dicas-nutricionais.entity';
import { DicasNutricionaisService } from './dicas-nutricionais.service';
import { DicasNutricionaisController } from './dicas-nutricionais.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DicasNutricionais])],
  providers: [DicasNutricionaisService],
  controllers: [DicasNutricionaisController],
})
export class DicasNutricionaisModule {}
