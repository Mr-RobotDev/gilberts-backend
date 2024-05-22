import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SensorEvent } from './schema/sensor-event.schema';
import { EventType } from './enums/event-type.enum';

@Injectable()
export class SensorEventService {
  private sensor: string;
  private co2Sensor: string;

  constructor(
    @InjectModel(SensorEvent.name, 'cloudpopSensors')
    private readonly sensorEventModel: Model<SensorEvent>,
    private readonly configService: ConfigService,
  ) {
    this.sensor = this.configService.get<string>('sensor.id');
    this.co2Sensor = this.configService.get<string>('sensor.co2');
  }

  sensorEvents() {
    return this.sensorEventModel
      .find({ deviceId: this.sensor })
      .sort({ createdAt: -1 });
  }

  async temperatureSensorEvent() {
    const sensorEvent = await this.sensorEventModel
      .findOne({ deviceId: this.co2Sensor, eventType: EventType.HUMIDITY })
      .sort({ createdAt: -1 });
    return sensorEvent.data.humidity.temperature;
  }

  async co2SensorEvent() {
    const sensorEvent = await this.sensorEventModel
      .findOne({ deviceId: this.co2Sensor, eventType: EventType.CO2 })
      .sort({ createdAt: -1 });
    return sensorEvent.data.co2.ppm ? sensorEvent.data.co2.ppm : 0;
  }
}
