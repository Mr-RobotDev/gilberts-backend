import { Module } from '@nestjs/common';
import { TeacherInterfaceService } from './teacher-interface.service';
import { TeacherInterfaceController } from './teacher-interface.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TeacherInterface,
  TeacherInterfaceSchema,
} from './schema/teacher-interface.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TeacherInterface.name,
        schema: TeacherInterfaceSchema,
      },
    ]),
  ],
  controllers: [TeacherInterfaceController],
  providers: [TeacherInterfaceService],
})
export class TeacherInterfaceModule {}
