import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  CurrentSettingsId,
  CurrentSettingsIdValues,
} from '../enums/current-settings-id.enum';

@Schema({ versionKey: false })
export class CurrentSettings extends Document {
  @Prop({
    type: String,
    required: true,
    enum: CurrentSettingsIdValues,
    index: true,
  })
  id: CurrentSettingsId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const CurrentSettingsSchema =
  SchemaFactory.createForClass(CurrentSettings);
