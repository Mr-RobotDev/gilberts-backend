import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ModeSettingsId,
  ModeSettingsIdValues,
} from '../enums/mode-settings-id.enum';

@Schema({ versionKey: false })
export class ModeSettings extends Document {
  @Prop({
    type: String,
    required: true,
    enum: ModeSettingsIdValues,
    index: true,
  })
  id: ModeSettingsId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const ModeSettingsSchema = SchemaFactory.createForClass(ModeSettings);
