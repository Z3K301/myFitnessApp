import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Muscle } from './entities/muscle.entity';

@Injectable()
export class MuscleService extends TypeOrmCrudService<Muscle> {
  constructor(@InjectRepository(MuscleService) repository) {
    super(repository);
  }
}
