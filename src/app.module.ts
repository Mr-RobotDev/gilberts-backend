import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineersSettingsModule } from './engineers-settings/engineers-settings.module';
import configuration from '../config/configuration';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.url'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      ignoreEnvFile: false,
    }),
    EngineersSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
