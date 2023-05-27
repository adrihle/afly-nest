import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from '../helpers/env.helper';
import { INSTAGRAM, InstagramProvider } from './instagram';
import { TProviderConfig } from './interfaces';

const PROVIDERS = {
  [INSTAGRAM]: InstagramProvider,
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
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: getEnvPath(`${__dirname}/../../common/env`),
        }),
      ],
      module: ProvidersModule,
      providers,
      exports: providers,
    };
  }
}
