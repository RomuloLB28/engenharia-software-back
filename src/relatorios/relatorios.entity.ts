import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { Cardapio } from '../cardapios/cardapios.entity';

@Entity('Relatorios')
export class Relatorios {
  @PrimaryGeneratedColumn()
  id_relatorio: number;

  @Column({ type: 'enum', enum: ['feedback', 'desperdicio'], nullable: false })
  tipo_relatorio: 'feedback' | 'desperdicio';

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.id_cardapio, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_cardapio' })
  id_cardapio: Cardapio;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: Usuario;

  @Column({ type: 'text', nullable: false })
  conteudo: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  gerado_em: Date;
}
