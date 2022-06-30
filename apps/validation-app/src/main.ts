import { NestFactory } from '@nestjs/core';
import { ValidationAppModule } from './validation-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ValidationAppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
