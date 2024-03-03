import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CurrentReadingsService } from './current-readings.service';
import { UpdateCurrentSettingDto } from './dto/update-current-reading.dto';
import { CurrentReadingsId } from './enums/current-readings-id.enum';

@Controller('current-readings')
export class CurrentReadingsController {
  constructor(
    private readonly currentReadingsService: CurrentReadingsService,
  ) {}

  @Post('supply-fan-speed')
  @HttpCode(HttpStatus.OK)
  async supplyFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.SUPPLY_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('extract-fan-speed')
  @HttpCode(HttpStatus.OK)
  async extractFanSpeed(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.EXTRACT_FAN_SPEED,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-co2-level')
  @HttpCode(HttpStatus.OK)
  async roomCo2Level(@Body() updateCurrentSettingDto: UpdateCurrentSettingDto) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.ROOM_CO2_LEVEL,
      updateCurrentSettingDto.value,
    );
  }

  @Post('room-temperature')
  @HttpCode(HttpStatus.OK)
  async roomTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.ROOM_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(
    @Body() updateCurrentSettingDto: UpdateCurrentSettingDto,
  ) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.OUTSIDE_AIR_TEMPERATURE,
      updateCurrentSettingDto.value,
    );
  }

  @Get()
  currentReadings() {
    return this.currentReadingsService.currentReadings();
  }
}
