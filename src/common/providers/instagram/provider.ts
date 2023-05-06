import { Inject, Injectable, Logger } from '@nestjs/common';

export const CONFIG = 'CONFIG' as const;

export type Config = {
  apiKey: string;
};

@Injectable()
export class InstagramProvider {
  private readonly connection: string;
  private readonly logger = new Logger(InstagramProvider.name);

  constructor(@Inject(CONFIG) config: Config) {
    this.connection = this.createConnection(config);
  }

  private createConnection(config: Config) {
    if (config.apiKey !== '') {
      this.logger.log(`Initialized provider with ${config.apiKey}`);
      return 'successfull';
    }
    return 'not connected';
  }

  getConnection() {
    return this.connection;
  }
}
