import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InstagramProvider } from '@providers';

@Controller()
export class TestController {
  @Inject(InstagramProvider) private readonly instagram: InstagramProvider;
  @Inject(ConfigService) private readonly config: ConfigService;

  @Get()
  get() {
    const response = this.instagram.checkHealth();
    const config = this.config.get('PORT');
    console.log({ config });
    return response;
  }
}
