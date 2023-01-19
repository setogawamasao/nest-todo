import { Injectable } from '@nestjs/common';
import { Todo } from './dto/todo';
import { TodoCondition, TodoDto } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DateTime } from 'luxon';

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

    if (condition.dueDateFrom) {
      builder.andWhere('todo.dueDate >= :from', {
        from: condition.dueDateFrom,
      });
    }
    if (condition.dueDateTo) {
      builder.andWhere('todo.dueDate <= :to', {
        to: condition.dueDateTo,
      });
    }

    if (condition.createdAtFrom) {
      builder.andWhere('todo.createdAt >= :from', {
        from: condition.createdAtFrom,
      });
    }
    if (condition.createdAtTo) {
      builder.andWhere('todo.createdAt <= :to', {
        to: condition.createdAtTo,
      });
    }

    builder.addOrderBy('todo.id', 'ASC');

    return builder.getMany();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(todo: Todo) {
    const todoEntity = await this.findOne(todo.id);
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
