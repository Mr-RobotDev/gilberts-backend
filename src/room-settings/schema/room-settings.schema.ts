import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  RoomSettingsId,
  RoomSettingsIdValues,
} from '../enums/room-settings-id.enum';

@Schema({ versionKey: false })
export class RoomSettings extends Document {
  @Prop({
    type: String,
    required: true,
    enum: RoomSettingsIdValues,
    index: true,
  })
  id: RoomSettingsId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const RoomSettingsSchema = SchemaFactory.createForClass(RoomSettings);
