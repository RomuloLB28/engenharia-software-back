import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:process.env.DATABASE_HOST,
      port:Number(process.env.DATABASE_PORT),
      username:process.env.DATABASE_USER,
      password:process.env.DATABASE_PASSWORD,
      database:process.env.DATABASE_DBNAME,
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
      ssl: {
        ca: process.env.SSL_CERT, },
       }),
    UsuariosModule, // Certifique-se de que está importado aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
