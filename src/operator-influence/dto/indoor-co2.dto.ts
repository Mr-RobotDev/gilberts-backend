import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class IndoorCo2Dto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5000)
  value: number;
}
