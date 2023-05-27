import { EMAIL, TEmailConfig } from './email';
import { INSTAGRAM, TInstagramConfig } from './instagram';

type TProviderConfig = {
  [INSTAGRAM]?: TInstagramConfig;
  [EMAIL]?: TEmailConfig;
};

export type { TProviderConfig };
