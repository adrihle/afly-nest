import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { ProvidersModule } from '@providers';
import { NEST_CONFIG, PROVIDER_CONFIG } from '../../config';

const createTestModule = async () => {
  return Test.createTestingModule({
    imports: [
      ConfigModule.forRoot(NEST_CONFIG),
      ProvidersModule.forRootAsync(PROVIDER_CONFIG),
    ],
  }).compile();
};

export { createTestModule };
