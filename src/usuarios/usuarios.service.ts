import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}
  
  async validateUser(nome: string, senha: string): Promise<boolean> {
  const usuario = await this.usuariosRepository.findOneBy({ nome });

  if (usuario && usuario.senha_hash === senha) {
    return true; // Credenciais corretas
  }
  return false; // Credenciais incorretas
}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOneBy({ id_usuario: id });
  }

  create(usuario: Partial<Usuario>): Promise<Usuario> {
    const newUser = this.usuariosRepository.create(usuario);
    return this.usuariosRepository.save(newUser);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
  
}
