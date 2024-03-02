import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateModeSettingDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
