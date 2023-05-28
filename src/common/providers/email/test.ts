import { createTestModule } from '@testing';
import { EmailProvider } from '.';

describe('[PROVIDER] EMAIL', () => {
  let service: any;

  beforeEach(async () => {
    const ref = await createTestModule();

    service = ref.get<typeof EmailProvider>(EmailProvider);
  });

  it('Should correctly initialized', () => {
    expect(service.checkStatus().status).toBe('ok');
  });

  it('sendEmail should be called', async () => {
    const spy = jest.spyOn(service, 'updateStatus');
    await service.sendTestEmail();
    expect(spy).toBeCalled();
  });
});
