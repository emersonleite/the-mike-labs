import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';

/**
 * O controlador (ResidentsController) gerencia as rotas HTTP
 * relacionadas aos moradores e delega a lógica para o serviço (ResidentsService).
 */
@Controller('residents') // Define a rota principal como "/residents"
export class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  /**
   * Rota GET para listar todos os moradores.
   * Exemplo: GET /residents
   * Pode aceitar parâmetros de consulta (query parameters) para filtros.
   */
  @Get() // Mapeia requisições GET para este método
  findAll(@Query('filter') filter?: string) {
    // Query parameters podem ser usados para filtrar dados
    return this.residentsService.findAll();
  }

  /**
   * Rota GET para buscar um morador pelo ID.
   * Exemplo: GET /residents/1
   * Utiliza o decorador @Param para capturar parâmetros de rota.
   */
  @Get(':id') // Mapeia requisições GET com um parâmetro de rota
  findOne(@Param('id') id: string) {
    return this.residentsService.findOne(id); // Conversão automática do parâmetro para número
  }

  /**
   * Rota POST para criar um novo morador.
   * Exemplo: POST /residents
   * Aceita dados no corpo da requisição via @Body.
   */
  @Post() // Mapeia requisições POST para este método
  create(@Body() residentDto: CreateResidentDto) {
    return this.residentsService.create_alternative(residentDto);
  }

  /**
   * Rota PATCH para atualizar parcialmente um morador.
   * Exemplo: PATCH /residents/1
   */
  @Patch(':id') // Mapeia requisições PATCH para este método
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateResidentDto: UpdateResidentDto,
  ) {
    return this.residentsService.update(id, updateResidentDto);
  }

  /**
   * Rota DELETE para remover um morador.
   * Exemplo: DELETE /residents/1
   * Define um código de resposta personalizado com @HttpCode.
   */
  @Delete(':id') // Mapeia requisições DELETE para este método
  @HttpCode(204) // Responde com o código HTTP 204 (No Content)
  async remove(@Param('id') id: string) {
    return await this.residentsService.delete(id);
  }
}
