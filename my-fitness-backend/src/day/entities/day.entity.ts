import { IsNotEmpty, IsString } from 'class-validator';
import { varcharNotNull } from 'src/common/columnParameters';
import { GenericEntity } from 'src/common/entities/GenericEntity.entity';
import { Column, Entity } from 'typeorm';
@Entity()
export class Day extends GenericEntity {
  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  name: string;
}
