import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Cardapio } from '../cardapios/cardapios.entity';

@Entity('refeicoes')
export class Refeicao {
  @PrimaryGeneratedColumn()
  id_refeicao: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome_refeicao: string;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.refeicoes, { onDelete: 'CASCADE' })
  cardapio: Cardapio;

  @CreateDateColumn()
  data_criacao: Date;
  refeicao: { id_cardapio: number; };
    ingredientes: any;
}
export { Cardapio };

