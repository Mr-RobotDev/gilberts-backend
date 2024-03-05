import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import toJSON from '../../common/plugins/toJSON.plugin';

@Schema({ timestamps: true })
export class SensorEvent extends Document {
  @Prop({
    type: String,
    index: true,
  })
  deviceId: string;

  @Prop({
    type: String,
    index: true,
  })
  eventType: string;

  @Prop({
    type: Object,
  })
  data: object;
}

export const SensorEventSchema = SchemaFactory.createForClass(SensorEvent);

SensorEventSchema.plugin(toJSON);
