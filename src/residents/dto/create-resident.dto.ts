import { IsString, MaxLength, IsNotEmpty /* Matches */ } from 'class-validator';
import { Transform } from 'class-transformer';

/**
 * A classe `CreateResidentDto` é usada para transferir os dados necessários para
 * criar um novo morador. Validações específicas garantem a integridade dos dados.
 */
export class CreateResidentDto {
  /**
   * Número ou identificação do apartamento.
   */
  @IsString({ message: 'Apartment must be a string.' })
  @MaxLength(50, { message: 'Name must not exceed 50 characters.' })
  @IsNotEmpty({ message: 'Apartment cannot be empty.' })
  apartment: string;

  /**
   * Nome ou identificação do prédio.
   */
  @IsString({ message: 'Building must be a string.' })
  @IsNotEmpty({ message: 'Building cannot be empty.' })
  @MaxLength(50, { message: 'Name must not exceed 50 characters.' })
  @Transform(({ value }) => value.trim()) // Remove espaços em branco
  building: string;

  /**
   * Nome do morador.
   */
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty({ message: 'Name cannot be empty.' })
  @MaxLength(50, { message: 'Name must not exceed 50 characters.' })
  @Transform(({ value }) => value.trim()) // Remove espaços em branco
  name: string;
}
