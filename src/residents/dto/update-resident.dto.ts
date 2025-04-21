import { PartialType } from '@nestjs/mapped-types';
import { CreateResidentDto } from './create-resident.dto';

/* PartialType herda os validadores do DTO original (CreateResidentDto) e os torna opcionais */
export class UpdateResidentDto extends PartialType(CreateResidentDto) {}
