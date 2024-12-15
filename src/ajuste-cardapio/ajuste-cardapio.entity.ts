import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cardapio } from '../cardapios/cardapios.entity';

@Entity('AjusteCardapio')
export class AjusteCardapio {
  @PrimaryGeneratedColumn()
  id_ajuste: number;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.id_cardapio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_cardapio' })
  id_cardapio: Cardapio;

  @Column({ type: 'text', nullable: false })
  ajustes: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_ajuste: Date;
}
