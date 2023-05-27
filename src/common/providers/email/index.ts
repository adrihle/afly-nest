import { Injectable } from '@nestjs/common';
import { TEmailConfig } from './interfaces';

const EMAIL = 'EMAIL' as const;

@Injectable()
class EmailProvider {
  private config: TEmailConfig;

  constructor(config: TEmailConfig) {
    this.config = config;
  }
  init() {
    console.log('initialized');
  }
}

export { EmailProvider, TEmailConfig, EMAIL };
