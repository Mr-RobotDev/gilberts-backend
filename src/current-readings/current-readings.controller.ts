import { Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CurrentReadingsService } from './current-readings.service';
import { CurrentReadingsId } from './enums/current-readings-id.enum';
import { PlainBody } from '../common/decorators/plain-body.decorator';

@Controller('current-readings')
export class CurrentReadingsController {
  constructor(
    private readonly currentReadingsService: CurrentReadingsService,
  ) {}

  @Post('supply-fan-speed')
  @HttpCode(HttpStatus.OK)
  async supplyFanSpeed(@PlainBody() value: number) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.SUPPLY_FAN_SPEED,
      value,
    );
  }

  @Post('extract-fan-speed')
  @HttpCode(HttpStatus.OK)
  async extractFanSpeed(@PlainBody() value: number) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.EXTRACT_FAN_SPEED,
      value,
    );
  }

  @Post('room-co2-level')
  @HttpCode(HttpStatus.OK)
  async roomCo2Level(@PlainBody() value: number) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.ROOM_CO2_LEVEL,
      value,
    );
  }

  @Post('room-temperature')
  @HttpCode(HttpStatus.OK)
  async roomTemperature(@PlainBody() value: number) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.ROOM_TEMPERATURE,
      value,
    );
  }

  @Post('outside-air-temperature')
  @HttpCode(HttpStatus.OK)
  async outsideAirTemperature(@PlainBody() value: number) {
    await this.currentReadingsService.updateCurrentReadings(
      CurrentReadingsId.OUTSIDE_AIR_TEMPERATURE,
      value,
    );
  }

  @Get()
  currentReadings() {
    return this.currentReadingsService.currentReadings();
  }
}
