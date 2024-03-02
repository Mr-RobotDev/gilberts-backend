import { Module } from '@nestjs/common';
import { EngineersSettingsService } from './engineers-settings.service';
import { EngineersSettingsController } from './engineers-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EngineersSettings,
  EngineersSettingsSchema,
} from './schema/engineers-settings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EngineersSettings.name,
        schema: EngineersSettingsSchema,
      },
    ]),
  ],
  controllers: [EngineersSettingsController],
  providers: [EngineersSettingsService],
})
export class EngineersSettingsModule {}
