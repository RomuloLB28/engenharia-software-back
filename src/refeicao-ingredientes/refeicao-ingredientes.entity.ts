import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Refeicao } from '../refeicoes/refeicoes.entity';
import { Ingrediente } from '../ingredientes/ingredientes.entity';

@Entity('refeicao_ingredientes')
export class RefeicaoIngredientes {
  @PrimaryGeneratedColumn()
  id_refeicao_ingrediente: number;

  @ManyToOne(() => Refeicao, (refeicao) => refeicao.ingredientes, { onDelete: 'CASCADE' })
  refeicao: Refeicao;

  @ManyToOne(() => Ingrediente, (ingrediente) => ingrediente.refeicoes, { onDelete: 'CASCADE' })
  ingrediente: Ingrediente;
}
