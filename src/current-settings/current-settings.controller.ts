import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurrentSettingsService } from './current-settings.service';
import { UpdateCurrentSettingDto } from './dto/update-current-setting.dto';
import { CurrentSettingsId } from './enums/current-settings-id.enum';

@Controller('current-settings')
export class CurrentSettingsController {
  constructor(
    private readonly currentSettingsService: CurrentSettingsService,
  ) {}

  @Post('supply-fan-speed')
  async supplyFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.SUPPLY_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('extract-fan-speed')
  async extractFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.EXTRACT_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-co2-level')
  async roomCo2Level(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_CO2_LEVEL,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-temperature')
  async roomTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentSettingsService.updateCurrentSettings(
      CurrentSettingsId.ROOM_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Post('outside-air-temperature')
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
