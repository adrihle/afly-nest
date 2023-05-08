import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TProviderStatus } from '../interfaces';

type TInstagramConfig = {
  apiKey: string;
};

const INSTAGRAM = 'INSTAGRAM' as const;

@Injectable()
class InstagramProvider {
  @Inject(ConfigService) private config: ConfigService;
  private readonly logger = new Logger(InstagramProvider.name);
  private status: TProviderStatus;

  constructor(config: TInstagramConfig) {
    this.status = this.createConnection(config);
  }

  private createConnection({ apiKey }: TInstagramConfig): TProviderStatus {
    if (!apiKey || typeof apiKey !== 'string')
      return {
        status: 'down',
        message: 'missing api key',
      };
    this.logger.log(`Initialized provider with ${apiKey}`);
    return {
      status: 'ok',
      message: `success run for ${apiKey}`,
    };
  }

  checkHealth() {
    const ig = this.config.get('INSTAGRAM_ACCOUNT_USERNAME')
    return this.status;
  }
}

export { InstagramProvider, TInstagramConfig, INSTAGRAM };
