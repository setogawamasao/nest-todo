import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class TodoDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsDate()
  @Type(() => Date)
  dueDate: Date;
  @IsBoolean()
  isDone: boolean;
}

export class TodoCondition {
  @IsString()
  @IsOptional()
  title?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsDate()
  dueDate?: Date;
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
  @IsOptional()
  @IsDate()
  dueDateFrom?: Date;
  @IsOptional()
  @IsDate()
  dueDateTo?: Date;
  @IsOptional()
  @IsDate()
  createdAtFrom?: Date;
  @IsOptional()
  @IsDate()
  createdAtTo?: Date;
}
