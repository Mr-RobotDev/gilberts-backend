import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateEngineersSettingsDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
