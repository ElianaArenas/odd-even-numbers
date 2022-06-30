import { Body, Controller, Post } from '@nestjs/common';
import { NumberDto } from './dto/number.dto';
import { INumberType } from './interfaces/numberType.interface';

import { OddEvenGateway } from './odd-even.gateway';
import { IsNumberPipe } from './pipes/is-number.pipe';
import { IsOddOrEvenPipe } from './pipes/is-odd-or-even.pipe';


@Controller('validation')
export class ValidationAppController {
  
  constructor(
    private readonly oddEvenGateway: OddEvenGateway
    ) { }

  @Post()
  oddOrEven(@Body(IsNumberPipe, IsOddOrEvenPipe) bodyDto: NumberDto): string {
    
    //Send the validation to the client microservice
    this.oddEvenGateway.sendNumbers(bodyDto as INumberType);

    return 'The number was sent'
  }


}
