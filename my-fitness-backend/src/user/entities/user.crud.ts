import { CrudOptions } from '@nestjsx/crud';
import { User } from './user.entity';

export const UserCrud: CrudOptions = {
  model: { type: User },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
    join: {
      role: { eager: true },
    },
  },
};
