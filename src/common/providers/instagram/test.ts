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
        ProvidersModule.forRootAsync({
          INSTAGRAM: {
            clientId: process.env.FB_API_KEY,
            secretId: process.env.FB_API_SECRET,
          },
        }),
      ],
    }).compile();

    instagramService = ref.get<InstagramProvider>(InstagramProvider);
  });

  it('service should be defined', () => {
    expect(instagramService).toBeDefined();
  });

  it('service should connect successfully', () => {
    expect(instagramService.checkStatus().status).toBe('ok');
  });
});
