import { IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTeacherInterfaceDto {
  @IsInt()
  @IsNotEmpty()
  @IsIn([1, 2, 3, 4])
  value: number;
}
