import { Module } from '@nestjs/common';
import { TestController } from './controller';
import { TestService } from './service';

@Module({
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
