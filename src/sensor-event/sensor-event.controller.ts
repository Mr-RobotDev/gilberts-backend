import { Controller, Get } from '@nestjs/common';
import { SensorEventService } from './sensor-event.service';

@Controller('sensor-events')
export class SensorEventController {
  constructor(private readonly sensorEventService: SensorEventService) {}

  @Get()
  sensorEvents() {
    return this.sensorEventService.sensorEvents();
  }
}
