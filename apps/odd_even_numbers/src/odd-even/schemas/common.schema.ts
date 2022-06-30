import { Prop } from '@nestjs/mongoose';

export class CommonSchema {

  @Prop()
  value: number;

  @Prop()
  type: string;

  @Prop()
  createdAt: Date;
}