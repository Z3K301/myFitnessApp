import { User } from './entities/user.entity';
import { CrudOptions } from '@nestjsx/crud';

export const UserCrud: CrudOptions = {
  model: { type: User },
  query: {
    sort: [{ field: 'id', order: 'DESC' }],
  },
};
