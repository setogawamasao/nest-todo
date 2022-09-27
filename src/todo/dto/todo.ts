import { TodoDto } from '../dto/todo.dto';
import { TodoEntity } from '../../entities/todo.entity';

export class Todo {
  title: string;
  description: string;
  dueDate: Date;
  isDone: boolean;

  fromDto = (dto: TodoDto) => {
    this.title = dto.title;
    this.description = dto.description;
    this.dueDate = dto.dueDate;
    this.isDone = dto.isDone;
  };

  toEntity = (): TodoEntity => {
    const entity = new TodoEntity();
    entity.title = this.title;
    entity.description = this.description;
    entity.dueDate = this.dueDate;
    entity.isDone = this.isDone;

    return entity;
  };
}
