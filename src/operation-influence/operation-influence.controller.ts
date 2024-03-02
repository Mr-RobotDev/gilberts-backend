import { Controller, Post, Body } from '@nestjs/common';
import { OperationInfluenceService } from './operation-influence.service';
import { OverrideValue } from './dto/override-value.dto';
import { OperationInfluenceId } from './enums/operation-influence-id.enum';

@Controller('operation-influence')
export class OperationInfluenceController {
  constructor(
    private readonly operationInfluenceService: OperationInfluenceService,
  ) {}

  @Post('override-value')
  async overrideValue(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.OVERRIDE_VALUE,
      overrideValue.value,
    );
  }

  @Post('outside-air-temperature')
  async outsideAirTemperature(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.OUTSIDE_AIR_TEMPERATURE,
      overrideValue.value,
    );
  }

  @Post('indoor-room-temperature')
  async indoorRoomTemperature(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_ROOM_TEMPERATURE,
      overrideValue.value,
    );
  }

  @Post('indoor-co2')
  async indoorCo2(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_CO2,
      overrideValue.value,
    );
  }
}
