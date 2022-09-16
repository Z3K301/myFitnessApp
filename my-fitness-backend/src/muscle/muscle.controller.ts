import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { MuscleCrud } from './muscle.crud';
import { MuscleService } from './muscle.service';

@Crud(MuscleCrud)
@Controller('muscle')
export class MuscleController {
  constructor(public muscleService: MuscleService) {}
}
