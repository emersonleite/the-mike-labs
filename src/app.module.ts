import { Module } from '@nestjs/common';
import { ResidentsModule } from './residents/residents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticesModule } from './notices/notices.module';

/**
 * O módulo principal da aplicação (AppModule).
 * Aqui importamos o módulo de moradores (ResidentsModule),
 * conectando todos os recursos relacionados a moradores com o aplicativo principal.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/db.sqlite',
      autoLoadEntities: true, // Carrega entidades sem precisar especificá-las
      synchronize: true, // Configuração de sincronização automática (não recomendado em produção)
    }),
    ResidentsModule,
    NoticesModule,
  ], // Importa o módulo de moradores
})
export class AppModule {}
