import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('Cardapios')
export class Cardapio {
  @PrimaryGeneratedColumn()
  id_cardapio: number;

  @Column({ type: 'varchar', length: 100 })
  nome_cardapio: string;

  @CreateDateColumn()
  data_criacao: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.cardapios, { nullable: true, onDelete: 'SET NULL' })
  criado_por: Usuario | null;
    refeicoes: any;
}
