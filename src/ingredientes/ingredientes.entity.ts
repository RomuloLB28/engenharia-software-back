import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Refeicao } from '../refeicoes/refeicoes.entity';

@Entity('ingredientes')
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id_ingrediente: number;

  @Column({ type: 'varchar', length: 100 })
  nome_ingrediente: string;

  @Column({ type: 'text', nullable: true })
  info_nutricional: string;

  @ManyToMany(() => Refeicao, (refeicao) => refeicao.ingredientes)
  @JoinTable({
    name: 'refeicao_ingredientes',
    joinColumn: { name: 'id_ingrediente', referencedColumnName: 'id_ingrediente' },
    inverseJoinColumn: { name: 'id_refeicao', referencedColumnName: 'id_refeicao' },
  })
  refeicoes: Refeicao[];
}
