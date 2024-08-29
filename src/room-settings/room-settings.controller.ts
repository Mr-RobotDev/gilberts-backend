import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RoomSettingsService } from './room-settings.service';
import { RoomSettingsId } from './enums/room-settings-id.enum';
import { Co2SetPointDto } from './dto/co2-set-point.dto';
import { TemperatureSetPointDto } from './dto/temperature-set-point.dto';

@Controller('room-settings')
export class RoomSettingsController {
  constructor(private readonly roomSettingsService: RoomSettingsService) {}

  @Post('co2-set-point')
  @HttpCode(HttpStatus.OK)
  async co2LevelBandBottom(@Body() co2LevelBandBottomDto: Co2SetPointDto) {
    await this.roomSettingsService.updateRoomSettings(
      RoomSettingsId.CO2_SET_POINT,
      co2LevelBandBottomDto.value,
    );
  }

  @Get('co2-set-point')
  getCo2LevelBandBottom() {
    return this.roomSettingsService.getRoomSettings(
      RoomSettingsId.CO2_SET_POINT,
    );
  }

  @Post('temperature-set-point')
  @HttpCode(HttpStatus.OK)
  async indoorRoomSetPoint(
    @Body() indoorRoomSetPointDto: TemperatureSetPointDto,
  ) {
    await this.roomSettingsService.updateRoomSettings(
      RoomSettingsId.TEMPERATURE_SET_POINT,
      indoorRoomSetPointDto.value,
    );
  }

  @Get('temperature-set-point')
  getIndoorRoomSetPoint() {
    return this.roomSettingsService.getRoomSettings(
      RoomSettingsId.TEMPERATURE_SET_POINT,
    );
  }

  @Get()
  RoomSettings() {
    return this.roomSettingsService.roomSettings();
  }
}
