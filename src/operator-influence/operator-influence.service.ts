import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperatorInfluence } from './schema/operator-influence.schema';

@Injectable()
export class OperatorInfluenceService {
  constructor(
    @InjectModel(OperatorInfluence.name)
    private readonly operatorInfluenceModel: Model<OperatorInfluence>,
  ) {}

  updateOperatingInfluence(id: string, value: number) {
    return this.operatorInfluenceModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }

  async getOperatingInfluence(id: string): Promise<number | undefined> {
    const operatingInfluence = await this.operatorInfluenceModel
      .findOne({ id })
      .exec();
    return operatingInfluence?.value;
  }

  operatingInfluence() {
    return this.operatorInfluenceModel.find({}, { _id: 0, __v: 0 });
  }
}
