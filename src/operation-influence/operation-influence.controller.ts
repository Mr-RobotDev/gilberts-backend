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
import { OutsideAirTemperatureDto } from './dto/outside-air-temperature.dto';
import { InsideRoomTemperatureDto } from './dto/indoor-room-temperature.dto';
import { IndoorCo2Dto } from './dto/indoor-co2.dto';

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
  async outsideAirTemperature(
    @Body() outsideAirTemperatureDto: OutsideAirTemperatureDto,
  ) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.OUTSIDE_AIR_TEMPERATURE,
      outsideAirTemperatureDto.value,
    );
  }

  @Post('indoor-room-temperature')
  @HttpCode(HttpStatus.OK)
  async indoorRoomTemperature(
    @Body() insideRoomTemperatureDto: InsideRoomTemperatureDto,
  ) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_ROOM_TEMPERATURE,
      insideRoomTemperatureDto.value,
    );
  }

  @Post('indoor-co2')
  @HttpCode(HttpStatus.OK)
  async indoorCo2(@Body() indoorCo2Dto: IndoorCo2Dto) {
    await this.operationInfluenceService.updateOperatingInfluence(
      OperationInfluenceId.INDOOR_CO2,
      indoorCo2Dto.value,
    );
  }

  @Get()
  operatingInfluence() {
    return this.operationInfluenceService.operatingInfluence();
  }
}
