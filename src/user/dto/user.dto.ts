import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class UserDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  @IsString()
  loginId: string;
  @IsString()
  password: string;
}
