import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { QueryErrorFilter } from './lib/filters/queryErrorFilter';

const frontPath = join(__dirname, '..', 'public')

async function bootstrap() {


  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new QueryErrorFilter(app.get(HttpAdapterHost).httpAdapter));
  //app.useGlobalFilters(new NotFoundExceptionFilter());
  app.setGlobalPrefix('api');

  app.useStaticAssets(frontPath);
  app.setBaseViewsDir(frontPath);
  app.setViewEngine('html');
  app.enableCors();

  var bodyParser = require('body-parser');

  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

  const options = new DocumentBuilder()
    .setTitle('MyFitness API')
    .setDescription(`API desarrollada para uso exclusivo MyFitness API`)
    .setVersion('0.1.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document);
  await app.listen(5000);
  Logger.log(`Server running at port ${await app.getUrl()}`);

}
bootstrap();