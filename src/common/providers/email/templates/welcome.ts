const WELCOME = 'WELCOME' as const;

type TWelcomeTemplateParams = {
  name: string;
};

const getWelcomeTemplate = ({ name }: TWelcomeTemplateParams) => `
  <h1>Hellow parpucha ${name}<h1>
`;

export { getWelcomeTemplate, WELCOME };
export type { TWelcomeTemplateParams };
