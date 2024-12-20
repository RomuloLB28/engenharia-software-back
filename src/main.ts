import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS com configurações completas
  app.enableCors({
    origin: 'https://engenharia-software-front.vercel.app', // Permite apenas o frontend React loca
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization', // Headers permitidos
    credentials: true, // Permite cookies e credenciais
  });

  await app.listen(10000);
}
bootstrap();
