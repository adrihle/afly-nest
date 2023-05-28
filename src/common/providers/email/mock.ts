import { Injectable } from '@nestjs/common';
import { asyncResponseMock } from '@testing';
import { EmailProvider } from './provider';

@Injectable()
class EmailProviderMock extends EmailProvider {
  init(): void {
    this.updateStatus({ status: 'ok', message: 'test' });
  }
  async sendTestEmail(): Promise<void> {
    this.updateStatus({ status: 'ok', message: 'test' });
    return asyncResponseMock;
  }
}

export { EmailProviderMock };
