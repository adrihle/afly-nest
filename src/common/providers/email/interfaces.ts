import { TTemplateConfig } from './templates';

type TEmailConfig = {
  email: string;
  password: string;
};

type TSendEmailParams = {
  template: TTemplateConfig;
  to: string;
  subject: string;
};

export type { TEmailConfig, TSendEmailParams };
