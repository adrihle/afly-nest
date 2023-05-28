import { Injectable, Logger } from '@nestjs/common';
import { BaseProvider } from '../base';
import { TEmailConfig, TSendEmailParams } from './interfaces';
import { Transporter, createTransport } from 'nodemailer';
import { TEMPLATES } from './templates';

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

  async sendEmail({ template: { id, params }, to, subject }: TSendEmailParams) {
    try {
      const htmlGenerator = TEMPLATES[id];
      const html = htmlGenerator(params as any);
      const info = await this.transporter.sendMail({
        from: '"no reply 👻" <adrihfly.dev@gmail.com>', // sender address
        to,
        subject,
        html,
      });
      this.logger.log(`Email sent to ${to} with ${info.messageId}`);
    } catch (err) {
      this.logger.error(err);
    }
  }
}

export { EmailProvider, EMAIL };
