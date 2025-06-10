import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { Repository } from 'typeorm';
import { Notice } from './entities/notice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResidentsService } from 'src/residents/residents.service';

@Injectable()
export class NoticesService {
  constructor(
    @InjectRepository(Notice) // Injetando o repositório a partir de Notice (entidade)
    private readonly noticeRepository: Repository<Notice>,
    private readonly residentsService: ResidentsService,
  ) {}

  async findAll(): Promise<Notice[]> {
    return await this.noticeRepository.find({
      relations: ['createdBy'], // Relacionando createdBy para o retorno da query
      select: { createdBy: { id: true, name: true } }, // Selecionando apenas os campos id e name de createdBy
    });
  }

  async findOne(id: string): Promise<Notice> {
    const notice = await this.noticeRepository.findOne({
      where: { id },
      relations: ['createdBy'],
      select: { createdBy: { id: true, name: true } },
    });
    if (!notice) {
      throw new NotFoundException(`Notice with ID ${id} not found.`);
    }
    return notice;
  }

  async create(noticeDto: CreateNoticeDto): Promise<Notice> {
    const { createdBy, ...rest } = noticeDto;

    await this.residentsService.findOne(createdBy);

    const notice = this.noticeRepository.create({
      ...rest,
      createdBy: { id: createdBy } as any,
    });

    return this.noticeRepository.save(notice);
  }

  async update(id: string, updateResidentDto: UpdateNoticeDto) {
    const notice = await this.noticeRepository.preload({
      id,
      ...updateResidentDto,
      createdBy: updateResidentDto.createdBy
        ? { id: updateResidentDto.createdBy }
        : undefined,
    });

    if (!notice) {
      throw new NotFoundException(`Notice with ID ${id} not found.`);
    }

    return this.noticeRepository.save(notice);
  }

  async delete(id: string): Promise<Notice> {
    const notice = await this.noticeRepository.findOneBy({ id });
    if (!notice) {
      throw new NotFoundException(`Notice with ID ${id} not found.`);
    }
    await this.noticeRepository.remove(notice);
    return notice;
  }
}
