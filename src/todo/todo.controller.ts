import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './dto/todo';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todoDto: TodoDto) {
    const todo = new Todo();
    todo.fromDto(todoDto);
    return this.todoService.create(todo);
  }

  @Get()
  findAll() {
    console.log('test00000000');
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() todoDto: TodoDto) {
    const todo = new Todo();
    todo.fromDto(todoDto);
    const todoEntity = this.todoService.update(+id, todo);
    if (!todoEntity) {
      //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return todoEntity;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
