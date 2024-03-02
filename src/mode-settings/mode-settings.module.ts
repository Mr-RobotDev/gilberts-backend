import { Module } from '@nestjs/common';
import { ModeSettingsService } from './mode-settings.service';
import { ModeSettingsController } from './mode-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeSettings, ModeSettingsSchema } from './schema/mode-setting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ModeSettings.name,
        schema: ModeSettingsSchema,
      },
    ]),
  ],
  controllers: [ModeSettingsController],
  providers: [ModeSettingsService],
})
export class ModeSettingsModule {}
