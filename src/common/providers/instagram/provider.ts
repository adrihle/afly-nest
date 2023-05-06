import { Injectable } from '@nestjs/common';

@Injectable()
export class InstagramProvider {
  public connection: string;
  public provider: typeof globalThis = globalThis;

  init() {
    this.connection = 'connection';
    return this.provider;
  }

  getFeed() {
    return 'instagram provider';
  }

  getConnection() {
    return this.connection;
  }
}

export const init = async () => {
  const provider = new InstagramProvider();
  await provider.init();
  return provider;
};
