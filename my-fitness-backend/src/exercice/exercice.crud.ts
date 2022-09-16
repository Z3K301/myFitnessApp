import { CrudOptions } from '@nestjsx/crud';
import { Exercice } from './entities/exercice.entity';

export const ExerciceCrud: CrudOptions = {
  model: { type: Exercice },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
  },
};
