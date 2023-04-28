import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/module';

@Module({
  imports: [RoutesModule],
})
export class AppModule {}
