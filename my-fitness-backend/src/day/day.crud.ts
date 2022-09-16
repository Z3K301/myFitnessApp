import { CrudOptions } from '@nestjsx/crud';
import { Day } from './entities/day.entity';

export const DayCrud: CrudOptions = {
  model: { type: Day },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
  },
};
