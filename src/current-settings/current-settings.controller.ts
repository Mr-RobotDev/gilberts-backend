import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CurrentSettingsService } from './current-settings.service';
import { UpdateCurrentSettingDto } from './dto/update-current-setting.dto';
import { CurrentSettingsId } from './enums/current-settings-id.enum';

@Controller('current-settings')
export class CurrentSettingsController {
  constructor(
    private readonly currentSettingsService: CurrentSettingsService,
  ) {}

  @Post('supply-fan-speed')
  @HttpCode(HttpStatus.NO_CONTENT)
  supplyFanSpeed(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    return this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.SUPPLY_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('extract-fan-speed')
  @HttpCode(HttpStatus.NO_CONTENT)
  extractFanSpeed(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    return this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.EXTRACT_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-co2-level')
  @HttpCode(HttpStatus.NO_CONTENT)
  roomCo2Level(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    return this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_CO2_LEVEL,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-temperature')
  @HttpCode(HttpStatus.NO_CONTENT)
  roomTemperature(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    return this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.NO_CONTENT)
  outsideAirTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    return this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.OUTSIDE_AIR_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Get()
  currentSettings() {
    return this.currentSettingsService.currentSettings();
  }
}
