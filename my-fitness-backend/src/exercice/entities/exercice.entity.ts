import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { varcharNotNull, longtextNull } from 'src/common/columnParameters';
import { GenericEntity } from 'src/common/entities/GenericEntity.entity';
import { Column, Entity } from 'typeorm';
@Entity()
export class Exercice extends GenericEntity {
  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column(longtextNull)
  @IsEmpty()
  @IsString()
  description: string;

  @Column(varcharNotNull)
  @IsNotEmpty()
  @IsString()
  video: string;
}
