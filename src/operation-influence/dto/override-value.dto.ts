import { IsInt, IsNotEmpty, IsIn } from 'class-validator';

export class OverrideValue {
  @IsInt()
  @IsNotEmpty()
  @IsIn([0, 1])
  value: number;
}
