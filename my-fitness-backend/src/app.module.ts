import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';


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
  }), UserModule,],
 
})
export class AppModule {}
