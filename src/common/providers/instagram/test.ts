import { Test } from '@nestjs/testing';
import { ProvidersModule } from '../module';
import { InstagramProvider } from '.';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from '../../helpers/env.helper';

const envFilePath = getEnvPath(`${__dirname}/../../common/env`);

describe('INSTRAGRAM', () => {
  let instagramService: InstagramProvider;

  beforeEach(async () => {
    const ref = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath,
        }),
        ProvidersModule.forRoot({
          INSTAGRAM: { apiKey: '12345' },
        }),
      ],
    }).compile();

    instagramService = ref.get<InstagramProvider>(InstagramProvider);
  });

  it('service should be defined', () => {
    expect(instagramService).toBeDefined();
  });

  it('service should connect successfully', () => {
    expect(instagramService.checkHealth().status).toBe('ok');
  });
});
