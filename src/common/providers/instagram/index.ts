import { Injectable, Logger } from '@nestjs/common';

export type TInstagramConfig = {
  apiKey: string;
};

type TStatus = {
  status: 'ok' | 'down';
  message: string;
};

export const INSTAGRAM = 'INSTAGRAM' as const;

@Injectable()
export class InstagramProvider {
  private readonly logger = new Logger(InstagramProvider.name);
  private status: TStatus;

  constructor(config: TInstagramConfig) {
    this.status = this.createConnection(config);
  }

  private createConnection({ apiKey }: TInstagramConfig): TStatus {
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
    return this.status;
  }
}
