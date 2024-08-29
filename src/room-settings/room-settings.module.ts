import { Module } from '@nestjs/common';
import { RoomSettingsService } from './room-settings.service';
import { RoomSettingsController } from './room-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RoomSettings,
  RoomSettingsSchema,
} from './schema/room-settings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RoomSettings.name,
        schema: RoomSettingsSchema,
      },
    ]),
  ],
  controllers: [RoomSettingsController],
  providers: [RoomSettingsService],
})
export class RoomSettingsModule {}
