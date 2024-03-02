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
  @HttpCode(HttpStatus.OK)
  async unitMode(@Body() updateUnitModeDto: UpdateUnitModeDto) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.UNIT_MODE,
      updateUnitModeDto.value,
    );
  }

  @Get('unit-mode')
  async getUnitMode() {
    await this.modeSettingsService.getModeSetting(ModeSettingsId.UNIT_MODE);
  }

  @Post('operating-mode')
  @HttpCode(HttpStatus.OK)
  async operatingMode(@Body() updateOperatingModeDto: UpdateOperatingModeDto) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.OPERATING_MODE,
      updateOperatingModeDto.value,
    );
  }

  @Get('operating-mode')
  async getOperatingMode() {
    await this.modeSettingsService.getModeSetting(
      ModeSettingsId.OPERATING_MODE,
    );
  }

  @Post('heating-valve-output')
  @HttpCode(HttpStatus.OK)
  async heatingValveOutput(@Body() updateModeSettingDto: UpdateModeSettingDto) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEATING_VALVE_OUTPUT,
      updateModeSettingDto.value,
    );
  }

  @Post('heat-exchanger-damper')
  @HttpCode(HttpStatus.OK)
  async heatExchangerDamper(
    @Body() updateModeSettingDto: UpdateModeSettingDto,
  ) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEAT_EXCHANGER_DAMPER,
      updateModeSettingDto.value,
    );
  }

  @Get()
  modeSettings() {
    return this.modeSettingsService.modeSettings();
  }
}
