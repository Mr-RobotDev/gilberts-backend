import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  EngineersSettingsId,
  EngineersSettingsIdValues,
} from '../enums/engineers-settings-id.enum';

@Schema({ versionKey: false })
export class EngineersSettings extends Document {
  @Prop({
    type: String,
    required: true,
    enum: EngineersSettingsIdValues,
    index: true,
  })
  id: EngineersSettingsId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const EngineersSettingsSchema =
  SchemaFactory.createForClass(EngineersSettings);
