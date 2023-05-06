import { Controller, Get, Inject } from '@nestjs/common';
import { InstagramProvider } from '@providers';

@Controller()
export class TestController {
  @Inject(InstagramProvider) private readonly instagram: InstagramProvider;

  @Get()
  get(): string {
    const response = this.instagram.getConnection();
    return response;
  }
}
