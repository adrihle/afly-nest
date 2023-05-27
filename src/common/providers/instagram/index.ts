import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { BaseProvider } from '../base';
import { TAuthResponse, TInstagramConfig } from './interfaces';

const INSTAGRAM = 'INSTAGRAM' as const;
const BASE_URL = 'https://graph.facebook.com';

@Injectable()
class InstagramProvider extends BaseProvider {
  private readonly logger = new Logger(InstagramProvider.name);
  private config: TInstagramConfig;
  private client: AxiosInstance;

  constructor(config: TInstagramConfig) {
    super();
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
      this.updateStatus({
        status: 'ok',
        message: 'Instagram provider initialized correctly',
      });
      this.logger.log(`Initialized provider with ${this.config.clientId}`);
    } catch (err) {
      this.logger.error(err);
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

  async test() {
    console.log(this.client);
    return this.client.get('/v16.0/me?fields=id,name&transport=cors');
  }
}

export { InstagramProvider, TInstagramConfig, INSTAGRAM };
