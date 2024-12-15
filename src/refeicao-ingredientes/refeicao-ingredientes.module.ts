import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefeicaoIngredientes } from './refeicao-ingredientes.entity';
import { RefeicaoIngredientesService } from '../refeicao-ingredientes/refeicao-ingrediente.service';
import { RefeicaoIngredientesController } from './refeicao-ingredientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RefeicaoIngredientes])],
  providers: [RefeicaoIngredientesService],
  controllers: [RefeicaoIngredientesController],
  exports: [RefeicaoIngredientesService],
})
export class RefeicaoIngredientesModule {}
