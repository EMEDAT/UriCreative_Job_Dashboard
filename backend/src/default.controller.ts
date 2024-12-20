import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {
  @Get()
  getRoot() {
    return { message: 'Welcome to the Job Application API' };
  }
}
