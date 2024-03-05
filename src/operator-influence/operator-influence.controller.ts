import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OperatorInfluenceService } from './operator-influence.service';
import { OverrideValue } from './dto/override-value.dto';
import { OperatorInfluenceId } from './enums/operator-influence-id.enum';
import { OutsideAirTemperatureDto } from './dto/outside-air-temperature.dto';
import { InsideRoomTemperatureDto } from './dto/indoor-room-temperature.dto';
import { IndoorCo2Dto } from './dto/indoor-co2.dto';

@Controller('operator-influence')
export class OperatorInfluenceController {
  constructor(
    private readonly operatorInfluenceService: OperatorInfluenceService,
  ) {}

  @Post('override-value')
  @HttpCode(HttpStatus.OK)
  async overrideValue(@Body() overrideValue: OverrideValue) {
    await this.operatorInfluenceService.updateOperatingInfluence(
      OperatorInfluenceId.OVERRIDE_VALUE,
      overrideValue.value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(
    @Body() outsideAirTemperatureDto: OutsideAirTemperatureDto,
  ) {
    await this.operatorInfluenceService.updateOperatingInfluence(
      OperatorInfluenceId.OUTSIDE_AIR_TEMPERATURE,
      outsideAirTemperatureDto.value,
    );
  }

  @Post('indoor-room-temperature')
  @HttpCode(HttpStatus.OK)
  async indoorRoomTemperature(
    @Body() insideRoomTemperatureDto: InsideRoomTemperatureDto,
  ) {
    await this.operatorInfluenceService.updateOperatingInfluence(
      OperatorInfluenceId.INDOOR_ROOM_TEMPERATURE,
      insideRoomTemperatureDto.value,
    );
  }

  @Post('indoor-co2')
  @HttpCode(HttpStatus.OK)
  async indoorCo2(@Body() indoorCo2Dto: IndoorCo2Dto) {
    await this.operatorInfluenceService.updateOperatingInfluence(
      OperatorInfluenceId.INDOOR_CO2,
      indoorCo2Dto.value,
    );
  }

  @Get()
  operatingInfluence() {
    return this.operatorInfluenceService.operatingInfluence();
  }
}
