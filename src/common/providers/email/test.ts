import { createTestModule } from '@testing';
import { EmailProvider as MockProvider } from '.';
import { EmailProvider } from './provider';
import { TEMPLATE_IDS } from './templates';

describe('[PROVIDER] EMAIL', () => {
  let service: Partial<EmailProvider>;

  beforeEach(async () => {
    const ref = await createTestModule();

    service = ref.get<EmailProvider>(MockProvider);
  });

  it('Should correctly initialized', () => {
    expect(service.checkStatus().status).toBe('ok');
  });

  it('sendEmail should be called', async () => {
    await service.sendEmail({
      template: {
        id: TEMPLATE_IDS.WELCOME,
        params: {
          name: 'Estefi',
        },
      },
      to: 'e.mtzcarreira@gmail.com',
      subject: 'que te quiero joer',
    });
  });
});
