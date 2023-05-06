import { Test } from '@nestjs/testing';
import { ProvidersModule } from '../module';
import { InstagramProvider } from '.';

describe('INSTRAGRAM', () => {
  let instagramService: InstagramProvider;

  beforeEach(async () => {
    const ref = await Test.createTestingModule({
      imports: [
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
