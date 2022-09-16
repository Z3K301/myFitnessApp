import { GenericEntity } from 'src/common/entities/GenericEntity.entity';
import { Column, Entity } from 'typeorm';
import {
  enumType,
  varcharNotNull,
  varcharNull,
} from 'src/common/columnParameters';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { units } from 'src/common/enumerations/units';
@Entity()
export class User extends GenericEntity {
  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  login: string;

  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  password: string;

  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column(varcharNull)
  @IsNotEmpty()
  @IsString()
  avatar: string;

  @Column(enumType(units))
  @IsDefined()
  @IsEnum(units)
  unit: string;
}
