import { CrudOptions } from '@nestjsx/crud';
import { Muscle } from './entities/muscle.entity';

export const MuscleCrud: CrudOptions = {
  model: { type: Muscle },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
  },
};
