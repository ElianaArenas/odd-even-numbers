import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonSchema } from './common.schema';

@Schema({ collection: 'even_numbers' })
export class Even extends CommonSchema { }

export const EvenSchema = SchemaFactory.createForClass(Even);