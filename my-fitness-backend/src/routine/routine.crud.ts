import { CrudOptions } from '@nestjsx/crud';
import { Routine } from './entities/routine.entity';

export const RoutineCrud: CrudOptions = {
  model: { type: Routine },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
  },
};
