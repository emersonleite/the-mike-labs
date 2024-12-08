import { PartialType } from '@nestjs/mapped-types';
import { CreateResidentDto } from './create-resident.dto';

export class UpdateResidentDto extends PartialType(CreateResidentDto) {
  // PartialType herda os validadores do DTO original e os torna opcionais
}
