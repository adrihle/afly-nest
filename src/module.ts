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
    ProvidersModule.forRootAsync({
      INSTAGRAM: {
        clientId: process.env.FB_API_KEY,
        secretId: process.env.FB_API_SECRET,
      },
    }),
    RoutesModule,
  ],
})
export class AppModule {}
