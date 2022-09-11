import { NestFactory } from '@nestjs/core';
import { ValidationAppModule } from './validation-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ValidationAppModule);
  await app.listen(process.env.PORT,'0.0.0.0', () => console.log(`Listening on port: ${process.env.PORT}`));
}
bootstrap();
