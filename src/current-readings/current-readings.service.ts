import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CurrentReadings } from './schema/current-readings.schema';

@Injectable()
export class CurrentReadingsService {
  constructor(
    @InjectModel(CurrentReadings.name)
    private readonly currentSettingModel: Model<CurrentReadings>,
  ) {}

  updateCurrentReadings(id: string, value: number) {
    return this.currentSettingModel.findOneAndUpdate(
      { id },
      { value },
      { new: true, upsert: true },
    );
  }

  currentReadings() {
    return this.currentSettingModel.find({}, { _id: 0, __v: 0 });
  }
}
