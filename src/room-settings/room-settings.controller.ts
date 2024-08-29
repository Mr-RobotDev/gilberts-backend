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
import { Co2LevelBandBottomDto } from './dto/co2-level-band-bottom.dto';
import { Co2LevelBandTopDto } from './dto/co2-level-band-top.dto';
import { IndoorRoomSetPointDto } from './dto/indoor-room-set-point.dto';

@Controller('room-settings')
export class RoomSettingsController {
  constructor(private readonly roomSettingsService: RoomSettingsService) {}

  @Post('co2-level-band-bottom')
  @HttpCode(HttpStatus.OK)
  async co2LevelBandBottom(
    @Body() co2LevelBandBottomDto: Co2LevelBandBottomDto,
  ) {
    await this.roomSettingsService.updateRoomSettings(
      RoomSettingsId.CO2_LEVEL_BAND_BOTTOM,
      co2LevelBandBottomDto.value,
    );
  }

  @Get('co2-level-band-bottom')
  getCo2LevelBandBottom() {
    return this.roomSettingsService.getRoomSettings(
      RoomSettingsId.CO2_LEVEL_BAND_BOTTOM,
    );
  }

  @Post('co2-level-band-top')
  @HttpCode(HttpStatus.OK)
  async co2LevelBandTop(@Body() co2LevelBandTopDto: Co2LevelBandTopDto) {
    await this.roomSettingsService.updateRoomSettings(
      RoomSettingsId.CO2_LEVEL_BAND_TOP,
      co2LevelBandTopDto.value,
    );
  }

  @Get('co2-level-band-top')
  getCo2LevelBand() {
    return this.roomSettingsService.getRoomSettings(
      RoomSettingsId.CO2_LEVEL_BAND_TOP,
    );
  }

  @Post('indoor-room-set-point')
  @HttpCode(HttpStatus.OK)
  async indoorRoomSetPoint(
    @Body() indoorRoomSetPointDto: IndoorRoomSetPointDto,
  ) {
    await this.roomSettingsService.updateRoomSettings(
      RoomSettingsId.INDOOR_ROOM_SET_POINT,
      indoorRoomSetPointDto.value,
    );
  }

  @Get('indoor-room-set-point')
  getIndoorRoomSetPoint() {
    return this.roomSettingsService.getRoomSettings(
      RoomSettingsId.INDOOR_ROOM_SET_POINT,
    );
  }

  @Get()
  RoomSettings() {
    return this.roomSettingsService.roomSettings();
  }
}
