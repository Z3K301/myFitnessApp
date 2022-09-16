import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Routine } from './entities/routine.entity';

@Injectable()
export class RoutineService extends TypeOrmCrudService<Routine> {
  constructor(@InjectRepository(Routine) repository) {
    super(repository);
  }
}
