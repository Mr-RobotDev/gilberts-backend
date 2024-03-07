import { Controller, Get } from '@nestjs/common';
import { SensorEventService } from './sensor-event.service';

@Controller('sensor-events')
export class SensorEventController {
  constructor(private readonly sensorEventService: SensorEventService) {}

  @Get()
  sensorEvents() {
    return this.sensorEventService.sensorEvents();
  }

  @Get('/temperature-event')
  async temperatureSensorEvent() {
    return this.sensorEventService.temperatureSensorEvent();
  }

  @Get('/co2-event')
  async co2SensorEvent() {
    return this.sensorEventService.co2SensorEvent();
  }
}
