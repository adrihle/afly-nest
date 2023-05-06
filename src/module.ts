import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/module';
import { getEnvPath } from '@helpers';
import { InstagramModule } from '@providers';

const envFilePath = getEnvPath(`${__dirname}/common/env`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    InstagramModule.forRoot({
      apiKey: '12345',
    }),
    RoutesModule,
  ],
})
export class AppModule {}
