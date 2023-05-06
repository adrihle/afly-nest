import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TestController } from './controller';
import { TestService } from './service';

@Module({
  controllers: [TestController],
  providers: [ConfigService, TestService],
})
export class TestModule {}
