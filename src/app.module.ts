import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'mysql-d293004-romulo-lobato.j.aivencloud.com', // Host extraído da URI
  port: 28237, // Porta extraída da URI
  username: 'avnadmin', // Usuário extraído da URI
  password: 'AVNS_1gzPo43od3YQvNHTZMi', // Senha extraída da URI
  database: 'defaultdb', // Nome do banco de dados extraído da URI
  autoLoadEntities: true,
  synchronize: false, // Evite em produção
  logging: true,
  ssl: {
    rejectUnauthorized: false, // Para conexões seguras, ajuste conforme necessário
  },
}),
    UsuariosModule, // Certifique-se de que está importado aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
