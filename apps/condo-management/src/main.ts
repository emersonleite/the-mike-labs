import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do ValidationPipe global para validação de dados
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não declaradas nos DTOs
      forbidNonWhitelisted: true, // Retorna erro ao receber propriedades desconhecidas
      transform: true, // Converte tipos automaticamente
    }),
  );

  await app.listen(3000);
}
bootstrap();
