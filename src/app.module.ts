import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../config/configuration';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { RoomSettingsModule } from './room-settings/room-settings.module';
import { CurrentReadingsModule } from './current-readings/current-readings.module';
import { ModeSettingsModule } from './mode-settings/mode-settings.module';
import { OperatorInfluenceModule } from './operator-influence/operator-influence.module';
import { TeacherInterfaceModule } from './teacher-interface/teacher-interface.module';

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
    RoomSettingsModule,
    CurrentReadingsModule,
    ModeSettingsModule,
    OperatorInfluenceModule,
    TeacherInterfaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
