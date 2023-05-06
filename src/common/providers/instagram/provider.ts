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
    const newConnection = `${config.apiKey} connection!`;
    return newConnection;
  }

  getConnection() {
    return this.connection;
  }
}
