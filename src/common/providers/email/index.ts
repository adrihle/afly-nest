import { TEmailConfig } from './interfaces';
import { EmailProviderMock } from './mock';
import { EMAIL, EmailProvider } from './provider';

const isTestingEnv = process.env.NODE_ENV === 'test';
const Provider = isTestingEnv ? EmailProviderMock : EmailProvider;

export { Provider as EmailProvider, EMAIL };

export type { TEmailConfig };
