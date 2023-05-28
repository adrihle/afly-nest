import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/module';
import { ProvidersModule } from '@providers';
import { NEST_CONFIG, PROVIDER_CONFIG } from '@config';

@Module({
  imports: [
    ConfigModule.forRoot(NEST_CONFIG),
    ProvidersModule.forRootAsync(PROVIDER_CONFIG()),
    RoutesModule,
  ],
})
export class AppModule {}
