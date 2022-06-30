import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { OddEvenController } from './odd-even.controller';
import { OddEvenService } from './services/odd.service';
import { Even, EvenSchema } from './schemas/even.schema';
import { Odd, OddSchema } from './schemas/odd.schema';
import { EvenService } from './services/even.service';
import { SocketIoClientProvider } from '../socket-io-client.provider';

@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: Odd.name, schema: OddSchema },
      { name: Even.name, schema: EvenSchema }
    ]
  ),
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './apps/odd_even_numbers/.env',
  }),
  ],
  controllers: [OddEvenController],
  providers: [OddEvenService, EvenService, SocketIoClientProvider]
})

export class OddEvenModule { }
