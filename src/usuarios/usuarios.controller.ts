import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.findOne(+id);
  }

  @Post('register')
  create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    if (!usuario.nome || !usuario.email || !usuario.senha_hash || !usuario.matricula) {
      throw new BadRequestException('Os campos nome, email, senha e matrícula são obrigatórios.');
    }
    return this.usuariosService.create(usuario);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.update(+id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }
  @Post('login')
  async login(@Body() body: { nome: string; senha: string }): Promise<string> {
    const { nome, senha } = body;

    const isValid = await this.usuariosService.validateUser(nome, senha);

    if (isValid) {
      return 'Login bem-sucedido!';
    } else {
      throw new BadRequestException('Nome ou senha inválidos.');
    }
  }
  
  
}
