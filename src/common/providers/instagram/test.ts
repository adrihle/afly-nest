import { Test } from '@nestjs/testing';
import { InstagramModule } from './module';
import { InstagramProvider } from './provider';

describe('INSTRAGRAM', () => {
  let instagramModule: InstagramModule;
  let instagramService: InstagramProvider;

  beforeEach(async () => {
    const ref = await Test.createTestingModule({
      imports: [InstagramModule.forRoot({ apiKey: '12345' })],
    }).compile();

    instagramModule = ref.get<InstagramModule>(InstagramModule);
    instagramService = ref.get<InstagramProvider>(InstagramProvider);
  });

  it('module should be defined', () => {
    expect(instagramModule).toBeDefined();
  });

  it('service should be defined', () => {
    expect(instagramService).toBeDefined();
  });

  it('service should connect successfully', () => {
    expect(instagramService.getConnection()).toBe('successfull');
  });
});
