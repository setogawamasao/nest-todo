import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from '../entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService],
})
export class TodoModule {}
