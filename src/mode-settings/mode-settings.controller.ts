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
import { ModeSettingsId } from './enums/mode-settings-id.enum';
import { PlainBody } from '../common/decorators/plain-body.decorator';

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
    return this.modeSettingsService.getModeSetting(ModeSettingsId.UNIT_MODE);
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
    return this.modeSettingsService.getModeSetting(
      ModeSettingsId.OPERATING_MODE,
    );
  }

  @Post('heating-valve-output')
  @HttpCode(HttpStatus.OK)
  async heatingValveOutput(@PlainBody() value: number) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEATING_VALVE_OUTPUT,
      value,
    );
  }

  @Post('heat-exchanger-damper')
  @HttpCode(HttpStatus.OK)
  async heatExchangerDamper(@PlainBody() value: number) {
    await this.modeSettingsService.updateModeSetting(
      ModeSettingsId.HEAT_EXCHANGER_DAMPER,
      value,
    );
  }

  @Get()
  modeSettings() {
    return this.modeSettingsService.modeSettings();
  }
}
