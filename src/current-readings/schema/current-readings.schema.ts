import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  CurrentReadingsId,
  CurrentReadingsIdValues,
} from '../enums/current-readings-id.enum';

@Schema({ versionKey: false })
export class CurrentReadings extends Document {
  @Prop({
    type: String,
    required: true,
    enum: CurrentReadingsIdValues,
    index: true,
  })
  id: CurrentReadingsId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const CurrentReadingsSchema =
  SchemaFactory.createForClass(CurrentReadings);
