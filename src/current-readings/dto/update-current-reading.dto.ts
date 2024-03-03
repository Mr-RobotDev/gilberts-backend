import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCurrentSettingDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
