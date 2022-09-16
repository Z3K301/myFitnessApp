import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { DayCrud } from './day.crud';
import { DayService } from './day.service';

@Crud(DayCrud)
@Controller('day')
export class DayController {
  constructor(public dayService: DayService) {}
}
