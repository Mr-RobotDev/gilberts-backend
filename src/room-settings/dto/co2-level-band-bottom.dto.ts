import { IsNumber, Max, Min } from 'class-validator';

export class Co2LevelBandBottomDto {
  @IsNumber()
  @Min(0)
  @Max(1000)
  value: number;
}
