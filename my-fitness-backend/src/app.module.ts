import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "myFitness",
    entities: [
        "dist/**/*.entity{.ts,.js}",
        "src/entities/**/*.entity{.ts,.js}"
    ],
    subscribers: [
        "dist/**/**.subscriber{.ts,.js}"
    ],
    logging: false,
    synchronize: true,
    migrationsRun: true
  }),],
 
})
export class AppModule {}
