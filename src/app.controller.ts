import { Controller, Get } from '@nestjs/common';

@Controller() // Raiz da API ("/")
export class AppController {
  @Get() // Lida com GET /
  getRoot(): string {
    return 'API está funcionando!';
  }
}
