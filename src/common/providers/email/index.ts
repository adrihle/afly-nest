import { Injectable } from '@nestjs/common';
import { BaseProvider } from '../base';
import { TEmailConfig } from './interfaces';

const EMAIL = 'EMAIL' as const;

@Injectable()
class EmailProvider extends BaseProvider {
  private config: TEmailConfig;

  constructor(config: TEmailConfig) {
    super();
    this.config = config;
  }
  init() {
    this.updateStatus({
      status: 'ok',
      message: 'Email service running correctly',
    });
  }
}

export { EmailProvider, TEmailConfig, EMAIL };
