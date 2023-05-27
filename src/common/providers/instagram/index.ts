import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { tap } from 'rxjs';
import { TProviderStatus } from '../interfaces';

type TInstagramConfig = {
  clientId: string;
  secretId: string;
};

type TAuthResponse = {
  access_token: string;
  token_type: string;
};

const INSTAGRAM = 'INSTAGRAM' as const;
const BASE_URL = 'https://graph.facebook.com';

@Injectable()
class InstagramProvider {
  private readonly logger = new Logger(InstagramProvider.name);
  private config: TInstagramConfig;
  private status: TProviderStatus;
  private client: AxiosInstance;

  constructor(config: TInstagramConfig) {
    this.config = config;
  }

  public async init() {
    try {
      const { clientId, secretId } = this.config;
      const resp = await this.login({
        clientId,
        secretId,
      });
      this.client = axios.create({
        baseURL: BASE_URL,
        params: { access_token: resp?.access_token },
      });
      this.logger.log(`Initialized provider with ${this.config.clientId}`);
      this.status = {
        status: 'ok',
        message: 'Instagram running correctly',
      };
    } catch (err) {
      this.logger.error(err);
      this.status = {
        status: 'down',
        message: err,
      };
    }
  }

  private login = async ({
    clientId,
    secretId,
  }: any): Promise<TAuthResponse> => {
    return (
      clientId &&
      axios
        .get(`${BASE_URL}/oauth/access_token`, {
          params: {
            client_id: clientId,
            client_secret: secretId,
            grant_type: 'client_credentials',
          },
        })
        .then(({ data }) => data)
        .catch(({ response }) => console.log({ response }))
    );
  };

  checkHealth() {
    return this.status;
  }

  async test() {
    console.log(this.client);
    return this.client.get('/v16.0/me?fields=id,name&transport=cors');
  }
}

export { InstagramProvider, TInstagramConfig, INSTAGRAM };
