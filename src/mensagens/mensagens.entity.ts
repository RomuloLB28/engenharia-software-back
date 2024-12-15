import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('Mensagens')
export class Mensagens {
  @PrimaryGeneratedColumn()
  id_mensagem: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  conteudo: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'usuario_responsavel' })
  usuario_responsavel: Usuario;

  @Column({ type: 'enum', enum: ['manhã', 'tarde', 'noite'], nullable: true })
  turno: 'manhã' | 'tarde' | 'noite';

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_envio: Date;
}
