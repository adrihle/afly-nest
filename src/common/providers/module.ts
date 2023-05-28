import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { EMAIL, EmailProvider } from './email';
import { INSTAGRAM, InstagramProvider } from './instagram';
import { TProviderConfig } from './interfaces';

const PROVIDERS = {
  [INSTAGRAM]: InstagramProvider,
  [EMAIL]: EmailProvider,
};

@Global()
@Module({})
export class ProvidersModule {
  static forRootAsync(config: TProviderConfig): DynamicModule {
    const providers: Provider[] = [
      ...Object.entries(PROVIDERS).map(([name, provider]) => ({
        provide: provider,
        useFactory: async () => {
          const Provider = new provider(config[name]);
          await Provider.init();
          return Provider;
        },
      })),
    ];

    return {
      module: ProvidersModule,
      providers,
      exports: providers,
    };
  }
}
