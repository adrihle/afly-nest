type TInstagramConfig = {
  clientId: string;
  secretId: string;
};

type TAuthResponse = {
  access_token: string;
  token_type: string;
};

export type { TInstagramConfig, TAuthResponse };
