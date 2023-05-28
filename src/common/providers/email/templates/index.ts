import { getWelcomeTemplate, TWelcomeTemplateParams } from './welcome';

const TEMPLATE_IDS = {
  WELCOME: 'WELCOME',
  TEST: 'TEST',
} as const;

const { WELCOME, TEST } = TEMPLATE_IDS;

type TTestParams = { surname: string };

type TTemplateConfig =
  | {
      id: typeof WELCOME;
      params: TWelcomeTemplateParams;
    }
  | {
      id: typeof TEST;
      params: TTestParams;
    };

const TEMPLATES = {
  [WELCOME]: (params: TWelcomeTemplateParams) => getWelcomeTemplate(params),
  [TEST]: (params: TTestParams) => `${params.surname}`,
};

export { TEMPLATES, TEMPLATE_IDS };
export type { TTemplateConfig };
