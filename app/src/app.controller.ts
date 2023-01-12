import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller()
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getHello(): string {
    return this.dataService.getHello();
  }
}