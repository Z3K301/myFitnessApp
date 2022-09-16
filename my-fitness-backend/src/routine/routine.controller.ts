import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { RoutineCrud } from './routine.crud';
import { RoutineService } from './routine.service';

@Crud(RoutineCrud)
@Controller('routine')
export class RoutineController {
  constructor(public routineService: RoutineService) {}
}
