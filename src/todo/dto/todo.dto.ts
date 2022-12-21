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
  id?: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsDate()
  dueDate: Date;
  @IsBoolean()
  isDone: boolean;
}

export interface TodoCondition {
  title?: string;
  description?: string;
  dueDate?: Date;
  isDone?: boolean;
  dueDateFrom?: Date;
  dueDateTo?: Date;
  createdAtFrom?: Date;
  createdAtTo?: Date;
}
