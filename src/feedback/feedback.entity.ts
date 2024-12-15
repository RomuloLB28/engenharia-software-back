import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { Cardapio } from '../refeicoes/refeicoes.entity';

@Entity('Feedback')
export class Feedback {
  @PrimaryGeneratedColumn()
  id_feedback: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: Usuario;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.id_cardapio, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_cardapio' })
  id_cardapio: Cardapio;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @Column({ type: 'int', nullable: false })
  nota: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_feedback: Date;
}
