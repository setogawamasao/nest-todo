import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.dueDate = createTodoDto.dueDate;
    todo.isDone = createTodoDto.isDone;

    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
    todo.dueDate = updateTodoDto.dueDate;
    todo.isDone = updateTodoDto.isDone;
    return this.todoRepository.save(todo);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
