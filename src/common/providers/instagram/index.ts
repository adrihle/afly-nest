import Instagram from 'instagram-web-api';
import { Injectable, Logger } from '@nestjs/common';
import { TProviderStatus } from '../interfaces';

type TInstagramConfig = {
  username: string;
  password: string;
};

const INSTAGRAM = 'INSTAGRAM' as const;

@Injectable()
class InstagramProvider {
  private readonly logger = new Logger(InstagramProvider.name);
  private status: TProviderStatus;
  private client: any;

  private async init({
    username,
    password,
  }: TInstagramConfig): Promise<TProviderStatus> {
    try {
      this.client = new Instagram({ username, password });
      await this.client.login();
      this.logger.log(`Initialized provider with ${username}`);
    } catch (err) {
      this.logger.error(err);
    }
    return {
      status: 'ok',
      message: `success run for ${username}`,
    };
  }

  checkHealth() {
    return this.status;
  }
}

export { InstagramProvider, TInstagramConfig, INSTAGRAM };
