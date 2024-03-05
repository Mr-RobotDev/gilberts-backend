import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SensorEvent } from './schema/sensor-event.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SensorEventService {
  private deviceId: string;

  constructor(
    @InjectModel(SensorEvent.name, 'cloudpopSensors')
    private readonly sensorEventModel: Model<SensorEvent>,
    private readonly configService: ConfigService,
  ) {
    this.deviceId = this.configService.get<string>('sensor.id');
  }

  sensorEvents() {
    return this.sensorEventModel
      .find({ deviceId: this.deviceId })
      .sort({ createdAt: -1 });
  }
}
