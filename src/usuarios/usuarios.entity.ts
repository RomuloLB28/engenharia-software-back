import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50})
  matricula: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column()
  senha_hash: string;

  @Column({ type: 'enum', enum: ['copeira', 'aluno', 'nutricionista'] })
  tipo_usuario: 'copeira' | 'aluno' | 'nutricionista';

  @Column({ type: 'enum', enum: ['manhã', 'tarde', 'noite'], nullable: true })
  turno: 'manhã' | 'tarde' | 'noite' | null;

  @CreateDateColumn()
  data_criacao: Date;
  cardapios: any;
}
