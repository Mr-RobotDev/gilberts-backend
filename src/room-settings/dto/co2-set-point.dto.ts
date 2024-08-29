import { IsNumber, Max, Min } from 'class-validator';

export class Co2SetPointDto {
  @IsNumber()
  @Min(0)
  @Max(1000)
  value: number;
}
