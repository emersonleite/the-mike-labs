import { Module } from '@nestjs/common';
import { ResidentsModule } from './residents/residents.module';


/**
 * O módulo principal da aplicação (AppModule).
 * Aqui importamos o módulo de moradores (ResidentsModule),
 * conectando todos os recursos relacionados a moradores com o aplicativo principal.
 */
@Module({
  imports: [ResidentsModule], // Importa o módulo de moradores
})
export class AppModule {}
