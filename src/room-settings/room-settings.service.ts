import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomSettings } from './schema/room-settings.schema';

@Injectable()
export class RoomSettingsService {
  constructor(
    @InjectModel(RoomSettings.name)
    private readonly roomSettingsModel: Model<RoomSettings>,
  ) {}

  updateRoomSettings(id: string, value: number) {
    return this.roomSettingsModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }

  async getRoomSettings(id: string): Promise<number | undefined> {
    const roomSettings = await this.roomSettingsModel.findOne({ id }).exec();
    return roomSettings?.value;
  }

  roomSettings() {
    return this.roomSettingsModel.find({}, { _id: 0, __v: 0 });
  }
}
