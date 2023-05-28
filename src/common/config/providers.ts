import { TProviderConfig } from '@providers';

const PROVIDER_CONFIG: TProviderConfig = {
  INSTAGRAM: {
    clientId: process.env.FB_API_KEY,
    secretId: process.env.FB_API_SECRET,
  },
  EMAIL: {
    email: process.env.EMAIL_ADDRESS,
    password: process.env.EMAIL_PASSWORD,
  },
};

export { PROVIDER_CONFIG };
