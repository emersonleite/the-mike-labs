import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { Resident } from './entities/resident.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResidentsService {
  private residents: Resident[] = [];
  private id: number = 0;

  constructor(
    @InjectRepository(Resident) // Injetando o repositório a partir de Resident
    private readonly residentRepository: Repository<Resident>,
  ) {}

  async findAll(): Promise<Resident[]> {
    return await this.residentRepository.find();
  }

  async findOne(id: string): Promise<Resident> {
    const resident = await this.residentRepository.findOne({
      where: { id },
    });
    if (!resident) {
      throw new NotFoundException(`Resident with ID ${id} not found.`);
    }
    return resident;
  }

  async create(residentDto: CreateResidentDto): Promise<Resident> {
    const resident = this.residentRepository.create(residentDto);
    return this.residentRepository.save(resident);
  }

  async update(id: string, updateResidentDto: UpdateResidentDto) {
    const resident = await this.residentRepository.preload({
      id,
      ...updateResidentDto,
    });

    if (!resident) {
      throw new NotFoundException(`Resident with ID ${id} not found.`);
    }

    return this.residentRepository.save(resident);
  }

  async delete(id: string): Promise<Resident> {
    const resident = await this.residentRepository.findOneBy({ id });
    if (!resident) {
      throw new NotFoundException(`Resident with ID ${id} not found.`);
    }
    await this.residentRepository.remove(resident);
    return resident;
  }
}
