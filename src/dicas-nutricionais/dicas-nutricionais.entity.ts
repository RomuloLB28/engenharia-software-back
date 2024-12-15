import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('DicasNutricionais')
export class DicasNutricionais {
  @PrimaryGeneratedColumn()
  id_dica: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  titulo: string;

  @Column({ type: 'text', nullable: false })
  conteudo: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_publicacao: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_nutricionista' })
  id_nutricionista: Usuario;
}
//dicas-nutricionais