import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeacherInterface } from './schema/teacher-interface.schema';

@Injectable()
export class TeacherInterfaceService {
  constructor(
    @InjectModel(TeacherInterface.name)
    private readonly teacherInterfaceModel: Model<TeacherInterface>,
  ) {}

  updateTeacherInterface(id: string, value: number) {
    return this.teacherInterfaceModel
      .findOneAndUpdate({ id }, { value }, { new: true, upsert: true })
      .exec();
  }

  async getTeacherInterface(id: string): Promise<number | undefined> {
    const operatingInfluence = await this.teacherInterfaceModel
      .findOne({ id })
      .exec();
    return operatingInfluence?.value;
  }

  async teacherInterface() {
    return this.teacherInterfaceModel.find({}, { _id: 0, __v: 0 });
  }
}
