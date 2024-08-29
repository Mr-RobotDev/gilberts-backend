import { IsNumber, Max, Min } from 'class-validator';

export class Co2LevelBandTopDto {
  @IsNumber()
  @Min(1000)
  @Max(5000)
  value: number;
}
