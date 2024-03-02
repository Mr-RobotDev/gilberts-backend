import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class InsideRoomTemperatureDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(35)
  value: number;
}
