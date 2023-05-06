import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InstagramProvider } from '@providers';
import { TestController } from './controller';

@Module({
  controllers: [TestController],
  providers: [ConfigService, InstagramProvider],
})
export class TestModule {}
