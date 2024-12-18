import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-d293004-romulo-lobato.j.aivenclound.com',
      port: Number(28237),
      username: 'avnadmin',
      password:'AVNS_1gzPo43od3YQvNHTZMi',
      database:'defaultdb',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuariosModule, // Certifique-se de que está importado aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
