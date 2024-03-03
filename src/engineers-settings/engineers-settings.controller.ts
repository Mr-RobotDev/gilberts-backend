import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EngineersSettingsService } from './engineers-settings.service';
import { EngineersSettingsId } from './enums/engineers-settings-id.enum';
import { Co2LevelBandBottomDto } from './dto/co2-level-band-bottom.dto';
import { Co2LevelBandTopDto } from './dto/co2-level-band-top.dto';
import { FanSpeedSettingsSummerUpperDto } from './dto/fan-speed-settings-summer-upper.dto';
import { FanSpeedSettingsSummerLowerDto } from './dto/fan-speed-settings-summer-lower.dto';
import { FanSpeedSettingsWinterUpperDto } from './dto/fan-speed-settings-winter-upper.dto';

@Controller('engineers-settings')
export class EngineersSettingsController {
  constructor(
    private readonly engineersSettingsService: EngineersSettingsService,
  ) {}

  @Post('co2-level-band-bottom')
  @HttpCode(HttpStatus.OK)
  async co2LevelBandBottom(
    @Body() co2LevelBandBottomDto: Co2LevelBandBottomDto,
  ) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND_BOTTOM,
      co2LevelBandBottomDto.value,
    );
  }

  @Get('co2-level-band-bottom')
  getCo2LevelBandBottom() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND_BOTTOM,
    );
  }

  @Post('co2-level-band-top')
  @HttpCode(HttpStatus.OK)
  async co2LevelBandTop(@Body() co2LevelBandTopDto: Co2LevelBandTopDto) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND_TOP,
      co2LevelBandTopDto.value,
    );
  }

  @Get('co2-level-band-top')
  getCo2LevelBand() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND_TOP,
    );
  }

  @Post('fan-speed-settings-summer-upper')
  @HttpCode(HttpStatus.OK)
  async fanSpeedSettingsSummerUpper(
    @Body() fanSpeedSettingsSummerUpperDto: FanSpeedSettingsSummerUpperDto,
  ) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER_UPPER,
      fanSpeedSettingsSummerUpperDto.value,
    );
  }

  @Get('fan-speed-settings-summer-upper')
  getFanSpeedSettingsSummerUpper() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER_UPPER,
    );
  }

  @Post('fan-speed-settings-summer-lower')
  @HttpCode(HttpStatus.OK)
  async fanSpeedSettingsSummerLower(
    @Body() fanSpeedSettingsSummerLowerDto: FanSpeedSettingsSummerLowerDto,
  ) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER_LOWER,
      fanSpeedSettingsSummerLowerDto.value,
    );
  }

  @Get('fan-speed-settings-summer-lower')
  getFanSpeedSettingsSummer() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER_LOWER,
    );
  }

  @Post('fan-speed-settings-winter-upper')
  @HttpCode(HttpStatus.OK)
  async fanSpeedSettingsWinterUpper(
    @Body() fanSpeedSettingsWinterUpperDto: FanSpeedSettingsWinterUpperDto,
  ) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER_UPPER,
      fanSpeedSettingsWinterUpperDto.value,
    );
  }

  @Get('fan-speed-settings-winter-upper')
  getFanSpeedSettingsWinterUpper() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER_UPPER,
    );
  }

  @Post('fan-speed-settings-winter-lower')
  @HttpCode(HttpStatus.OK)
  async fanSpeedSettingsWinterLower(
    @Body() fanSpeedSettingsWinterLowerDto: FanSpeedSettingsWinterUpperDto,
  ) {
    await this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER_LOWER,
      fanSpeedSettingsWinterLowerDto.value,
    );
  }

  @Get('fan-speed-settings-winter-lower')
  getFanSpeedSettingsWinter() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER_LOWER,
    );
  }

  @Get()
  engineersSettings() {
    return this.engineersSettingsService.engineersSettings();
  }
}
