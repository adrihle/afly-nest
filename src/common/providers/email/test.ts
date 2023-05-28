import { createTestModule } from '@testing';
import { EmailProvider } from '.';

describe('[PROVIDER] EMAIL', () => {
  let service: any;

  beforeEach(async () => {
    const ref = await createTestModule();

    service = ref.get<EmailProvider>(EmailProvider);
  });

  it('Should correctly initialized', () => {
    expect(service.checkStatus().status).toBe('ok');
  });
});
