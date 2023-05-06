import { Controller, Get, Inject } from '@nestjs/common';
import { TestService } from './service';

@Controller()
export class TestController {
  @Inject() private readonly service: TestService;

  @Get()
  get(): string {
    return this.service.get();
  }
}
