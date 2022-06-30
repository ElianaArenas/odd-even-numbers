import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OddEvenModule } from './odd-even/odd-even.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.Mongo_URL, {
      useNewUrlParser: true
    }),
    OddEvenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
