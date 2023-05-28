import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TestController } from './controller';

@Module({
  controllers: [TestController],
  providers: [ConfigService],
})
export class TestModule {}
