import { Injectable, Logger } from '@nestjs/common';
import { BaseProvider } from '../base';
import { TEmailConfig } from './interfaces';
import { Transporter, createTransport } from 'nodemailer';

const EMAIL = 'EMAIL' as const;

@Injectable()
class EmailProvider extends BaseProvider {
  private readonly logger = new Logger(EmailProvider.name);
  private config: TEmailConfig;
  private transporter: Transporter;

  constructor(config: TEmailConfig) {
    super();
    this.config = config;
  }

  init() {
    try {
      this.transporter = createTransport({
        service: 'Gmail',
        auth: {
          user: this.config.email,
          pass: this.config.password,
        },
      });
      this.updateStatus({
        status: 'ok',
        message: 'Email service running correctly',
      });
      this.logger.log('Initialized correctly');
    } catch (err) {
      this.logger.error(err);
    }
  }

  async sendTestEmail() {
    const info = await this.transporter.sendMail({
      from: '"Fred Foo 👻" <adrihfly.dev@gmail.com>', // sender address
      to: 'adrian.lpes@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });
    console.log({ info });
  }
}

export { EmailProvider, EMAIL };
