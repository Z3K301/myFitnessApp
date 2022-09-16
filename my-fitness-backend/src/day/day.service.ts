import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Day } from './entities/day.entity';

@Injectable()
export class DayService extends TypeOrmCrudService<Day> {
  constructor(@InjectRepository(Day) repository) {
    super(repository);
  }
}
