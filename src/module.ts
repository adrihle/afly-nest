import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/module';
import { getEnvPath } from '@helpers';
import { ProvidersModule } from './common/providers/module';

const envFilePath = getEnvPath(`${__dirname}/common/env`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    ProvidersModule.forRoot({
      INSTAGRAM: {
        username: process.env.INSTAGRAM_ACCOUNT_USERNAME,
        password: process.env.INSTAGRAM_ACCOUNT_PASSWORD,
      },
    }),
    RoutesModule,
  ],
})
export class AppModule {}
