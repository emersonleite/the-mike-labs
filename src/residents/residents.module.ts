import { Module } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ResidentsController } from './residents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resident } from './entities/resident.entity';

/**
 * Módulo de moradores (ResidentsModule).
 * Cada módulo organiza lógica específica do aplicativo.
 * Ele registra o serviço e o controlador relacionados aos moradores.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Resident])], // Importa as entidades necessárias para o módulo
  controllers: [ResidentsController], // Define os controladores do módulo
  providers: [ResidentsService], // Define os provedores (services) do módulo
})
export class ResidentsModule {}
