import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class IndoorCo2TemperatureDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5000)
  value: number;
}
