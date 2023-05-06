import { Controller, Get, Inject } from '@nestjs/common';
import { InstagramProvider } from '@providers';

@Controller()
export class TestController {
  @Inject() private readonly instagram: InstagramProvider;

  @Get()
  get(): string {
    const response = this.instagram.getFeed();
    console.log({ response });
    return response;
  }
}
