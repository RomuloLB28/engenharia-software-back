import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'GerenciamentoCardapio',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuariosModule, // Certifique-se de que está importado aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
