import { GenericEntity } from 'src/common/entities/GenericEntity.entity';
import { Column, Entity } from 'typeorm';
import { varcharNotNull, varcharNull } from 'src/common/columnParameters';
import { IsNotEmpty, IsString } from 'class-validator';
@Entity()
export class User extends GenericEntity {
  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  login: string;

  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column(varcharNull)
  @IsNotEmpty()
  @IsString()
  avatar: string;

  //TODO enum unit
}
