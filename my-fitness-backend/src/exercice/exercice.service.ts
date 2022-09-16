import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Exercice } from './entities/exercice.entity';

@Injectable()
export class ExerciceService extends TypeOrmCrudService<Exercice> {
  constructor(@InjectRepository(Exercice) repository) {
    super(repository);
  }
}
