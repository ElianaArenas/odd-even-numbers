import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOddDTO } from '../dto/odd.dto';
import { Odd } from '../schemas/odd.schema';

@Injectable()
export class OddEvenService {

  constructor(@InjectModel('Odd') private readonly oddModel: Model<Odd>) { }

  /**
   * Get the last 10 odd elements
   * @returns {Promise<Odd[]>} a promise with the last 10 elements
   */
  async get(): Promise<Odd[]> {
    return await this.oddModel.find().sort({ createdAt: -1 }).limit(10);
  }

  /**
   * Create a odd element
   * @param createOddDTO 
   * @returns {Promise<Odd>} a promise with the document created
   */
  async create(createOddDTO: CreateOddDTO): Promise<Odd> {
    const newOddNumber = new this.oddModel(createOddDTO);
    return await newOddNumber.save();
  }

}
