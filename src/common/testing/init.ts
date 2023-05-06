import {
  DynamicModule,
  ForwardReference,
  INestApplication,
  Type,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

type Module =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>;

export default async (modules: Module[]): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [ConfigModule.forRoot(), ...modules],
  }).compile();

  const mockedApp = moduleFixture.createNestApplication();
  await mockedApp.init();
  return mockedApp;
};
