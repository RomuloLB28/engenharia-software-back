import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS com configurações completas
  app.enableCors({
    origin: 'http://localhost:3000', // Permite apenas o frontend React loca
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization', // Headers permitidos
    credentials: true, // Permite cookies e credenciais
  });

  await app.listen(process.env.PORT);
}
bootstrap();
