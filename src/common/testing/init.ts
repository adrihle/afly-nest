import {
  DynamicModule,
  ForwardReference,
  INestApplication,
  Type,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getEnvPath } from '../helpers';
import { ProvidersModule } from '../providers/module';

type Module =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>;

const envFilePath = getEnvPath(`${__dirname}/../../common/env`);

export default async (modules: Module[]): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({ isGlobal: true, envFilePath }),
      ProvidersModule.forRootAsync({
        INSTAGRAM: {
          clientId: process.env.API_KEY,
          secretId: process.env.API_SECRET,
        },
      }),
      ...modules,
    ],
  }).compile();

  const mockedApp = moduleFixture.createNestApplication();
  await mockedApp.init();
  return mockedApp;
};
