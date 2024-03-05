import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class OutsideAirTemperatureDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(-25)
  @Max(35)
  value: number;
}
