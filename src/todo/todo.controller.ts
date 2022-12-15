import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoCondition, TodoDto } from './dto/todo.dto';
import { Todo } from './dto/todo';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todoDto: TodoDto) {
    const todo = new Todo();
    todo.fromDto(todoDto);
    return this.todoService.create(todo);
  }

  @Get('/search')
  findOne(
    @Query('title') title: string,
    @Query('description') description: string,
    @Query('isDone') isDone: boolean,
    @Query('dueDateFrom') dueDateFrom: Date,
    @Query('dueDateTo') dueDateTo: Date,
    @Query('createdAtFrom') createdAtFrom: Date,
    @Query('createdAtTo') createdAtTo: Date,
  ) {
    const condition: TodoCondition = {
      title,
      description,
      isDone,
      dueDateFrom,
      dueDateTo,
      createdAtFrom,
      createdAtTo,
    };
    return this.todoService.findAll(condition);
  }

  @Patch()
  update(@Body() todoDto: TodoDto) {
    const todo = new Todo();
    todo.fromDto(todoDto);
    const todoEntity = this.todoService.update(todo);
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
