import { Module } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ResidentsController } from './residents.controller';

/**
 * Módulo de moradores (ResidentsModule).
 * Cada módulo organiza lógica específica do aplicativo.
 * Ele registra o serviço e o controlador relacionados aos moradores.
 */
@Module({
  controllers: [ResidentsController], // Define os controladores do módulo
  providers: [ResidentsService], // Define os provedores (services) do módulo
})
export class ResidentsModule {}
