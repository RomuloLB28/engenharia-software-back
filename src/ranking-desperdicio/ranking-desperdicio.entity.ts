import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('RankingDesperdicio')
export class RankingDesperdicio {
  @PrimaryColumn({ type: 'enum', enum: ['manhã', 'tarde', 'noite'] })
  id_turno: 'manhã' | 'tarde' | 'noite';

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  desperdicio_total: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'usuario_responsavel' })
  usuario_responsavel: Usuario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_atualizacao: Date;
}
