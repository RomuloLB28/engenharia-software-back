import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relatorios } from './relatorios.entity';
import { RelatoriosService } from './relatorios.service';
import { RelatoriosController } from './relatorios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Relatorios])],
  providers: [RelatoriosService],
  controllers: [RelatoriosController],
})
export class RelatoriosModule {}
