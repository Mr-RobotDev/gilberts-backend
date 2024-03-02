import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ModeSettings } from './schema/mode-setting.schema';

@Injectable()
export class ModeSettingsService {
  constructor(
    @InjectModel(ModeSettings.name)
    private readonly modeSettingsModel: Model<ModeSettings>,
  ) {}

  updateModeSetting(id: string, value: number) {
    return this.modeSettingsModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }

  async getModeSetting(id: string): Promise<number | undefined> {
    const engineersSettings = await this.modeSettingsModel
      .findOne({ id })
      .exec();
    return engineersSettings?.value;
  }

  modeSettings() {
    return this.modeSettingsModel.find({}, { _id: 0, __v: 0 });
  }
}
