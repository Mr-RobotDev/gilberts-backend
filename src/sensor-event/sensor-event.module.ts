import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorEventService } from './sensor-event.service';
import { SensorEventController } from './sensor-event.controller';
import { SensorEvent, SensorEventSchema } from './schema/sensor-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: SensorEvent.name,
          schema: SensorEventSchema,
        },
      ],
      'cloudpopSensors',
    ),
  ],
  controllers: [SensorEventController],
  providers: [SensorEventService],
})
export class SensorEventModule {}
