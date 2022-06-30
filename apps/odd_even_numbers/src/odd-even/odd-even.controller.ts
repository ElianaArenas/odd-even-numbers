import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OddEvenService } from './services/odd.service';
import { EvenService } from './services/even.service';
import { CommonDTO } from './dto/common.dto';


@Controller('oddEven')
export class OddEvenController {

  numbers: CommonDTO[] = [];

  constructor(private oddService: OddEvenService, private evenService: EvenService) { }

  @MessagePattern('sendNumbers')
  handleEvents(@Payload() data: any) {
    //data is added while the numbers array has 10 elements
    this.numbers.push(data);
    
    if (this.numbers.length === 10) {

      for (const element of this.numbers) {

        let body: CommonDTO = {...element, createdAt: new Date() };

        //Create an odd or even document 
        element.type === 'odd' ? this.oddService.create(body)
         : this.evenService.create(body);
      }

      this.numbers = []; 
    }

  }

  @Get('lastNumbers')
  async getLastNumbers(): Promise<string[]> {

    //Get even and odd elements from the services
    const [even, odd] = await Promise.all([this.evenService.get(), this.oddService.get()]);

    const lastValues = [...even, ...odd];

    //It is sorted desc by createdAt and then the last 10 values are returned 
    const numberTypes: string[] = lastValues.sort((e, o) => e.createdAt?.getTime() - o.createdAt?.getTime())
                                  .reverse()
                                  .slice(0, 10)
                                  .map(l=> l.type);

    return numberTypes;
  }


}
