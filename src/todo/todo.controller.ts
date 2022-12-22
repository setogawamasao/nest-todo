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
import {
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiProperty,
  ApiNotFoundResponse,
  ApiTags,
  ApiQuery,
  ApiOperation,
} from '@nestjs/swagger';
@ApiTags('todoのエンドポイント一覧')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/search')
  @ApiOperation({ summary: 'todoの検索' })
  findOne(@Query() condition: TodoCondition) {
    return this.todoService.findAll(condition);
  }

  @Post()
  @ApiOperation({ summary: 'todoの登録' })
  create(@Body() todoDto: TodoDto) {
    const todo = new Todo();
    todo.fromDto(todoDto);
    return this.todoService.create(todo);
  }

  @Patch()
  @ApiOperation({ summary: 'todoの更新' })
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
  @ApiOperation({ summary: 'todoの削除' })
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
