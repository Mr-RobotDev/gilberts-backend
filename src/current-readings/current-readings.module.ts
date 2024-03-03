import { Module } from '@nestjs/common';
import { CurrentReadingsService } from './current-readings.service';
import { CurrentReadingsController } from './current-readings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CurrentReadings,
  CurrentReadingsSchema,
} from './schema/current-readings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CurrentReadings.name,
        schema: CurrentReadingsSchema,
      },
    ]),
  ],
  controllers: [CurrentReadingsController],
  providers: [CurrentReadingsService],
})
export class CurrentReadingsModule {}
