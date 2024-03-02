import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EngineersSettingsService } from './engineers-settings.service';
import { UpdateEngineersSettingsDto } from './dto/update-engineers-settings.dto';
import { EngineersSettingsId } from './enums/engineers-settings-id.enum';

@Controller('engineers-settings')
export class EngineersSettingsController {
  constructor(
    private readonly engineersSettingsService: EngineersSettingsService,
  ) {}

  @Post('/co2-level-band')
  @HttpCode(HttpStatus.NO_CONTENT)
  co2LevelBand(@Body() updateEngineersSettingDto: UpdateEngineersSettingsDto) {
    return this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND,
      updateEngineersSettingDto.value,
    );
  }

  @Get('/co2-level-band')
  getCo2LevelBand() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.CO2_LEVEL_BAND,
    );
  }

  @Post('/fan-speed-settings-summer')
  @HttpCode(HttpStatus.NO_CONTENT)
  fanSpeedSettingsSummer(
    @Body() updateEngineersSettingDto: UpdateEngineersSettingsDto,
  ) {
    return this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER,
      updateEngineersSettingDto.value,
    );
  }

  @Get('/fan-speed-settings-summer')
  getFanSpeedSettingsSummer() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_SUMMER,
    );
  }

  @Post('/fan-speed-settings-winter')
  @HttpCode(HttpStatus.NO_CONTENT)
  fanSpeedSettingsWinter(
    @Body() updateEngineersSettingDto: UpdateEngineersSettingsDto,
  ) {
    return this.engineersSettingsService.updateEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER,
      updateEngineersSettingDto.value,
    );
  }

  @Get('/fan-speed-settings-winter')
  getFanSpeedSettingsWinter() {
    return this.engineersSettingsService.getEngineersSettings(
      EngineersSettingsId.FAN_SPEED_SETTINGS_WINTER,
    );
  }
}
