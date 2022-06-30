import { Injectable, PipeTransform } from '@nestjs/common';
import { NumberDto } from '../dto/number.dto';
import { INumberType } from '../interfaces/numberType.interface';

@Injectable()
export class IsOddOrEvenPipe implements PipeTransform {
  transform({ value }: NumberDto): INumberType {
    
    const numberType: INumberType = {
      value,
      type: value % 2 === 0 ? 'odd' : 'even'
    };

    return numberType;
  }
}
