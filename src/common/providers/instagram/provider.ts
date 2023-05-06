import { Inject, Injectable } from '@nestjs/common';

export const CONFIG = 'CONFIG' as const;

export type Config = {
  apiKey: string;
};

@Injectable()
export class InstagramProvider {
  private readonly connection: string;

  constructor(@Inject(CONFIG) config: Config) {
    this.connection = this.createConnection(config);
  }

  private createConnection(config: Config) {
    if (config.apiKey !== '') {
      console.log(
        `#provider #instagram successfull connected through ${config.apiKey}`,
      );
      return 'successfull';
    }
    return 'not connected';
  }

  getConnection() {
    return this.connection;
  }
}
