import { Module } from '@nestjs/common';
import { ValidationAppController } from './validation-app.controller';
import { OddEvenGateway } from './odd-even.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/validation-app/.env',
    }),],
  controllers: [ValidationAppController],
  providers: [OddEvenGateway],
})
export class ValidationAppModule { }
