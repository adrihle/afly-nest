import { Injectable } from '@nestjs/common';
import { BaseProvider } from '../base';
import { TEmailConfig } from './interfaces';
import * as nodemailer from 'nodemailer';

const EMAIL = 'EMAIL' as const;

@Injectable()
class EmailProvider extends BaseProvider {
  private config: TEmailConfig;

  constructor(config: TEmailConfig) {
    super();
    this.config = config;
  }
  async init() {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      ...testAccount.smtp,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log({ transporter });
    this.updateStatus({
      status: 'ok',
      message: 'Email service running correctly',
    });
  }
}

export { EmailProvider, TEmailConfig, EMAIL };
