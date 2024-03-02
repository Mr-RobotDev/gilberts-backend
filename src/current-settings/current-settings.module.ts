import { Module } from '@nestjs/common';
import { CurrentSettingsService } from './current-settings.service';
import { CurrentSettingsController } from './current-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CurrentSettings,
  CurrentSettingsSchema,
} from './schema/current-setting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CurrentSettings.name,
        schema: CurrentSettingsSchema,
      },
    ]),
  ],
  controllers: [CurrentSettingsController],
  providers: [CurrentSettingsService],
})
export class CurrentSettingsModule {}
