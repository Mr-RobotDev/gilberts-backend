import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineersSettingsModule } from './engineers-settings/engineers-settings.module';
import { CurrentReadingsModule } from './current-readings/current-readings.module';
import { ModeSettingsModule } from './mode-settings/mode-settings.module';
import { OperatorInfluenceModule } from './operator-influence/operator-influence.module';
import { TeacherInterfaceModule } from './teacher-interface/teacher-interface.module';
import configuration from '../config/configuration';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { SensorEventModule } from './sensor-event/sensor-event.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.url'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.cloudpopSensors'),
      }),
      connectionName: 'cloudpopSensors',
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      ignoreEnvFile: false,
    }),
    EngineersSettingsModule,
    CurrentReadingsModule,
    ModeSettingsModule,
    OperatorInfluenceModule,
    TeacherInterfaceModule,
    SensorEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
