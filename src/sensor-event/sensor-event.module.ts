import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorEvent, SensorEventSchema } from './schema/sensor-event.schema';
import { SensorEventService } from './sensor-event.service';
import { SensorEventController } from './sensor-event.controller';

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
