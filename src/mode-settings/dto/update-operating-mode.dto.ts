import { IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateOperatingModeDto {
  @IsInt()
  @IsNotEmpty()
  @IsIn([0, 1])
  value: number;
}
