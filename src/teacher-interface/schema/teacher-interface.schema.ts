import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  TeacherInterfaceId,
  TeacherInterfaceIdValues,
} from '../enums/teacher-interface-id.enum';

@Schema({ versionKey: false })
export class TeacherInterface extends Document {
  @Prop({
    type: String,
    required: true,
    enum: TeacherInterfaceIdValues,
    index: true,
  })
  id: TeacherInterfaceId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const TeacherInterfaceSchema =
  SchemaFactory.createForClass(TeacherInterface);
