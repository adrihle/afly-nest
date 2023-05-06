import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { INSTAGRAM, InstagramProvider } from './instagram';
import { TProviderConfig } from './interfaces';

const PROVIDERS = {
  [INSTAGRAM]: InstagramProvider,
};

@Global()
@Module({})
export class ProvidersModule {
  static forRoot(config: TProviderConfig): DynamicModule {
    const providers: Provider[] = Object.entries(PROVIDERS).map(
      ([name, provider]) => ({
        provide: provider,
        useFactory: () => new provider(config[name]),
      }),
    );

    return {
      module: ProvidersModule,
      providers,
      exports: providers,
    };
  }
}
