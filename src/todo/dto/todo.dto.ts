export interface TodoDto {
  title: string;
  description: string;
  dueDate: Date;
  isDone: boolean;
}

export interface TodoCondition {
  title?: string;
  description?: string;
  dueDate?: Date;
  isDone?: boolean;
}
