import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  OperationInfluenceId,
  OperationInfluenceIdValues,
} from '../enums/operation-influence-id.enum';

@Schema({ versionKey: false })
export class OperationInfluence extends Document {
  @Prop({
    type: String,
    required: true,
    enum: OperationInfluenceIdValues,
    index: true,
  })
  id: OperationInfluenceId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const OperationInfluenceSchema =
  SchemaFactory.createForClass(OperationInfluence);
