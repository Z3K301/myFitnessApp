import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ExerciceCrud } from './exercice.crud';
import { ExerciceService } from './exercice.service';

@Crud(ExerciceCrud)
@Controller('exercice')
export class ExerciceController {
  constructor(public exerciceService: ExerciceService) {}
}
