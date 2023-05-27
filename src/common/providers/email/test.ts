import { createTestModule } from '@testing';
import { ProvidersModule } from '../module';

describe('[PROVIDER] EMAIL', () => {
  let service: any;

  beforeEach(async () => {
    const ref = await createTestModule(
      ProvidersModule.forRootAsync({
        INSTAGRAM: {
          clientId: process.env.FB_API_KEY,
          secretId: process.env.FB_API_SECRET,
        },
      }),
    );

    service = ref;
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });
});
