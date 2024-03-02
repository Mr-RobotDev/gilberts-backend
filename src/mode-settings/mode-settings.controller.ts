import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ModeSettingsService } from './mode-settings.service';
import { UpdateUnitModeDto } from './dto/update-unit-mode.dto';
import { UpdateOperatingModeDto } from './dto/update-operating-mode.dto';
import { UpdateModeSettingDto } from './dto/update-mode-setting.dto';
import { ModeSettingsId } from './enums/mode-settings-id.enum';

@Controller('mode-settings')
export class ModeSettingsController {
  constructor(private readonly modeSettingsService: ModeSettingsService) {}

  @Post('unit-mode')
  @HttpCode(HttpStatus.NO_CONTENT)
  unitMode(@Body() updateUnitModeDto: UpdateUnitModeDto) {
    return this.modeSettingsService.updateModeSetting(
      ModeSettingsId.UNIT_MODE,
      updateUnitModeDto.value,
    );
  }

  @Post('operating-mode')
  @HttpCode(HttpStatus.NO_CONTENT)
  operatingMode(@Body() updateOperatingModeDto: UpdateOperatingModeDto) {
    return this.modeSettingsService.updateModeSetting(
      ModeSettingsId.OPERATING_MODE,
      updateOperatingModeDto.value,
    );
  }

  @Post('heating-valve-output')
  @HttpCode(HttpStatus.NO_CONTENT)
  heatingValveOutput(@Body() updateModeSettingDto: UpdateModeSettingDto) {
    return this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEATING_VALVE_OUTPUT,
      updateModeSettingDto.value,
    );
  }

  @Post('heat-exchanger-damper')
  @HttpCode(HttpStatus.NO_CONTENT)
  heatExchangerDamper(@Body() updateModeSettingDto: UpdateModeSettingDto) {
    return this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEAT_EXCHANGER_DAMPER,
      updateModeSettingDto.value,
    );
  }

  @Get()
  modeSettings() {
    return this.modeSettingsService.modeSettings();
  }
}
