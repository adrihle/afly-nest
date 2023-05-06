import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { Config, InstagramProvider } from './provider';

@Global()
@Module({})
export class InstagramModule {
  static forRoot(config: Config): DynamicModule {
    const provider: Provider = {
      provide: InstagramProvider,
      useFactory: () => new InstagramProvider(config),
    };
    return {
      module: InstagramModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
