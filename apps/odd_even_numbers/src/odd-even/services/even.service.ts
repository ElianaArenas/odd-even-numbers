import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEvenDTO } from '../dto/even.dto';
import { Even } from '../schemas/even.schema';

@Injectable()
export class EvenService {

  constructor(@InjectModel('Even') private readonly evenModel: Model<Even>) { }

  /**
   * Get the last 10 even elements
   * @returns {Promise<Even[]>} a promise with the last 10 elements 
   */
  async get(): Promise<Even[]> {
    return await this.evenModel.find().sort({ createdAt: -1 }).limit(10);
  }

  /**
   * Create an even element
   * @param createEvenDTO 
   * @returns {Promise<Even>} a promise with the document created
   */
  async create(createEvenDTO: CreateEvenDTO): Promise<Even> {
    const newEvenNumber = new this.evenModel(createEvenDTO);
    return await newEvenNumber.save();
  }

}
