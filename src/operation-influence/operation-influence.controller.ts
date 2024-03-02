import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OperationInfluenceService } from './operation-influence.service';
import { OverrideValue } from './dto/override-value.dto';
import { OperationInfluenceId } from './enums/operation-influence-id.enum';

@Controller('operation-influence')
export class OperationInfluenceController {
  constructor(
    private readonly operationInfluenceService: OperationInfluenceService,
  ) {}

  @Post('override-value')
  @HttpCode(HttpStatus.OK)
  async overrideValue(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.OVERRIDE_VALUE,
      overrideValue.value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.OUTSIDE_AIR_TEMPERATURE,
      overrideValue.value,
    );
  }

  @Post('indoor-room-temperature')
  @HttpCode(HttpStatus.OK)
  async indoorRoomTemperature(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_ROOM_TEMPERATURE,
      overrideValue.value,
    );
  }

  @Post('indoor-co2')
  @HttpCode(HttpStatus.OK)
  async indoorCo2(@Body() overrideValue: OverrideValue) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_CO2,
      overrideValue.value,
    );
  }

  @Get()
  operatingInfluence() {
    return this.operationInfluenceService.operatingInfluence();
  }
}
