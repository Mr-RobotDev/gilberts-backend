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
import { OutsideAirTemperatureDto } from './dto/outside-air-temperature.dto';
import { InsideRoomTemperatureDto } from './dto/indoor-room-temperature.dto';
import { IndoorCo2Dto } from './dto/indoor-co2.dto';

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

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(
    @Body() outsideAirTemperatureDto: OutsideAirTemperatureDto,
  ) {
    await this.teacherInterfaceService.updateTeacherInterface(
      TeacherInterfaceId.OUTSIDE_AIR_TEMPERATURE,
      outsideAirTemperatureDto.value,
    );
  }

  @Get('outside-air-temperature')
  async getOutsideAirTemperature() {
    return this.teacherInterfaceService.getTeacherInterface(
      TeacherInterfaceId.OUTSIDE_AIR_TEMPERATURE,
    );
  }

  @Post('indoor-room-temperature')
  @HttpCode(HttpStatus.OK)
  async indoorRoomTemperature(
    @Body() insideRoomTemperatureDto: InsideRoomTemperatureDto,
  ) {
    await this.teacherInterfaceService.updateTeacherInterface(
      TeacherInterfaceId.INDOOR_ROOM_TEMPERATURE,
      insideRoomTemperatureDto.value,
    );
  }

  @Get('indoor-room-temperature')
  async getIndoorRoomTemperature() {
    return this.teacherInterfaceService.getTeacherInterface(
      TeacherInterfaceId.INDOOR_ROOM_TEMPERATURE,
    );
  }

  @Post('indoor-co2')
  @HttpCode(HttpStatus.OK)
  async indoorCo2(@Body() indoorCo2Dto: IndoorCo2Dto) {
    await this.teacherInterfaceService.updateTeacherInterface(
      TeacherInterfaceId.INDOOR_CO2,
      indoorCo2Dto.value,
    );
  }

  @Get('indoor-co2')
  async getIndoorCo2() {
    return this.teacherInterfaceService.getTeacherInterface(
      TeacherInterfaceId.INDOOR_CO2,
    );
  }

  @Get()
  teacherInterface() {
    return this.teacherInterfaceService.teacherInterface();
  }
}
