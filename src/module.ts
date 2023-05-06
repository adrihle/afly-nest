import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/module';
import { getEnvPath } from '@helpers';

const envFilePath = getEnvPath(`${__dirname}/common/env`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    RoutesModule,
  ],
})
export class AppModule {}
