import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
})
export class TodoModule {}
