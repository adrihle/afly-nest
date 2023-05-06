import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InstagramModule } from '@providers';
import { TestController } from './controller';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [ConfigService],
})
export class TestModule {}
