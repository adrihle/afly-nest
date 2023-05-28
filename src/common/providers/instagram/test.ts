import { InstagramProvider } from '.';
import { createTestModule } from '@testing';

describe('[PROVIDER] INSTAGRAM', () => {
  let instagramService: InstagramProvider;

  beforeEach(async () => {
    const ref = await createTestModule();

    instagramService = ref.get<InstagramProvider>(InstagramProvider);
  });

  it('service should be defined', () => {
    expect(instagramService).toBeDefined();
  });

  it('service should connect successfully', () => {
    expect(instagramService.checkStatus().status).toBe('ok');
  });
});
