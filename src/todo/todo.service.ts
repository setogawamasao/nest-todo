import { Injectable } from '@nestjs/common';
import { Todo } from './dto/todo';
import { TodoCondition, TodoDto } from './dto/todo.dto';
import { TodoEntity } from '../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  create(todo: Todo) {
    return this.todoRepository.save(todo.toEntity());
  }

  findAll(condition: TodoCondition) {
    const builder = this.todoRepository.createQueryBuilder('todo');

    if (condition.title) {
      builder.where('todo.title = :title', { title: condition.title });
    }

    if (condition.description) {
      builder.where("todo.description like '%' || :description || '%'", {
        description: condition.description,
      });
    }
    if (condition.isDone) {
      builder.where('todo.isDone = :isDone', { isDone: condition.isDone });
    }

    return builder.getMany();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, todo: Todo) {
    const todoEntity = await this.findOne(id);
    if (!todoEntity) {
      return undefined;
    }
    todoEntity.FromModel(todo);
    return this.todoRepository.save(todoEntity);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
