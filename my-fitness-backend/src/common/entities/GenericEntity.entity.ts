import { Allow } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class GenericEntity {

    @PrimaryGeneratedColumn()
    @Allow()
    id: number;
    
}