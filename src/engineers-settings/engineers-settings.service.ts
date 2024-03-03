import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EngineersSettings } from './schema/engineers-settings.schema';

@Injectable()
export class EngineersSettingsService {
  constructor(
    @InjectModel(EngineersSettings.name)
    private readonly engineersSettingsModel: Model<EngineersSettings>,
  ) {}

  updateEngineersSettings(id: string, value: number) {
    return this.engineersSettingsModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }

  async getEngineersSettings(id: string): Promise<number | undefined> {
    const engineersSettings = await this.engineersSettingsModel
      .findOne({ id })
      .exec();
    return engineersSettings?.value;
  }

  engineersSettings() {
    return this.engineersSettingsModel.find({}, { _id: 0, __v: 0 });
  }
}
