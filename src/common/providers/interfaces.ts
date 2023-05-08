import { INSTAGRAM, TInstagramConfig } from './instagram';

type TProviderConfig = {
  [INSTAGRAM]: TInstagramConfig;
};

type TProviderStatus = {
  status: 'ok' | 'down';
  message: string;
};

export type { TProviderConfig, TProviderStatus };
