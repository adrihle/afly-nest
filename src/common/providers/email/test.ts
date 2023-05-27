import { createTestModule } from '@testing';

describe('[PROVIDER] EMAIL', () => {
  let service: any;

  beforeEach(async () => {
    const ref = await createTestModule();

    service = ref;
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });
});
