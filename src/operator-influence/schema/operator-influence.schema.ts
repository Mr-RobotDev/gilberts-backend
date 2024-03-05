import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  OperatorInfluenceId,
  OperatorInfluenceIdValues,
} from '../enums/operator-influence-id.enum';

@Schema({ versionKey: false })
export class OperatorInfluence extends Document {
  @Prop({
    type: String,
    required: true,
    enum: OperatorInfluenceIdValues,
    index: true,
  })
  id: OperatorInfluenceId;

  @Prop({
    type: Number,
    required: true,
  })
  value: number;
}

export const OperatorInfluenceSchema =
  SchemaFactory.createForClass(OperatorInfluence);
