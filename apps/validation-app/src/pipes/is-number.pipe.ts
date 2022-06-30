import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsNumberPipe implements PipeTransform {
  transform(body: any) {

    if (!Number.isInteger(body?.value)) throw new BadRequestException('value must be an int number.');

    return body;
  }
}
