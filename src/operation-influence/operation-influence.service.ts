import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperationInfluence } from './schema/operation-influence.schema';

@Injectable()
export class OperationInfluenceService {
  constructor(
    @InjectModel(OperationInfluence.name)
    private readonly operationInfluenceModel: Model<OperationInfluence>,
  ) {}

  updateOperatingInfluence(id: string, value: number) {
    return this.operationInfluenceModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }
}
