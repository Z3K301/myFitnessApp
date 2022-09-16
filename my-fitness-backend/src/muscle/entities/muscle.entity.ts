import { IsNotEmpty, IsString } from 'class-validator';
import { varcharNotNull } from 'src/common/columnParameters';
import { GenericEntity } from 'src/common/entities/GenericEntity.entity';
import { Column } from 'typeorm';

export class Muscle extends GenericEntity {
  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  name: string;
}
