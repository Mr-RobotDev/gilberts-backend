import { IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUnitModeDto {
  @IsInt()
  @IsNotEmpty()
  @IsIn([0, 1])
  value: number;
}
