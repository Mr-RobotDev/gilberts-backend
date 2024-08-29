import { IsNumber, Max, Min } from 'class-validator';

export class Co2SetPointDto {
  @IsNumber()
  @Min(0)
  @Max(5000)
  value: number;
}
