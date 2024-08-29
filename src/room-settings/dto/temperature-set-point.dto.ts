import { IsNumber, Max, Min } from 'class-validator';

export class TemperatureSetPointDto {
  @IsNumber()
  @Min(10)
  @Max(35)
  value: number;
}
