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
  @HttpCode(HttpStatus.OK)
  async supplyFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.SUPPLY_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('extract-fan-speed')
  @HttpCode(HttpStatus.OK)
  async extractFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.EXTRACT_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-co2-level')
  @HttpCode(HttpStatus.OK)
  async roomCo2Level(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_CO2_LEVEL,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-temperature')
  @HttpCode(HttpStatus.OK)
  async roomTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.OUTSIDE_AIR_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Get()
  currentSettings() {
    return this.currentSettingsService.currentSettings();
  }
}
