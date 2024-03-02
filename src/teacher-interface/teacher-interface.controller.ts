import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TeacherInterfaceService } from './teacher-interface.service';
import { TeacherInterfaceId } from './enums/teacher-interface-id.enum';
import { UpdateTeacherInterfaceDto } from './dto/update-teacher-interface.dto';

@Controller('teacher-interface')
export class TeacherInterfaceController {
  constructor(
    private readonly teacherInterfaceService: TeacherInterfaceService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async updateTeacherInterface(
    @Body() updateTeacherInterfaceDto: UpdateTeacherInterfaceDto,
  ) {
    await this.teacherInterfaceService.updateTeacherInterface(
      TeacherInterfaceId.TEACHER_INTERFACE,
      updateTeacherInterfaceDto.value,
    );
  }

  @Get()
  getTecherInterface() {
    return this.teacherInterfaceService.getTeacherInterface(
      TeacherInterfaceId.TEACHER_INTERFACE,
    );
  }
}
