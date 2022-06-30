import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonSchema } from './common.schema';

@Schema({ collection: 'odd_numbers' })
export class Odd extends CommonSchema { }

export const OddSchema = SchemaFactory.createForClass(Odd);