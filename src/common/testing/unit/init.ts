import { getEnvPath } from '@helpers';
import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { ProvidersModule } from '@providers';

const envFilePath = getEnvPath(`${__dirname}/../../common/env`);

const createTestModule = async (module: DynamicModule) => {
  return Test.createTestingModule({
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
    ],
  }).compile();
};

export { createTestModule };
