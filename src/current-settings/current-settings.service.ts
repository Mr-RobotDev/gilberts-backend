import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CurrentSettings } from './schema/current-setting.schema';

@Injectable()
export class CurrentSettingsService {
  constructor(
    @InjectModel(CurrentSettings.name)
    private readonly currentSettingModel: Model<CurrentSettings>,
  ) {}

  updateCurrentSettings(id: string, value: number) {
    return this.currentSettingModel.findOneAndUpdate(
      { id },
      { value },
      { new: true, upsert: true },
    );
  }

  currentSettings() {
    return this.currentSettingModel.find({}, { _id: 0, __v: 0 });
  }
}
