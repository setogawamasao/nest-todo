import { Module } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoController } from '../controllers/todo.controller';
import { TodoEntity } from '../entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
})
export class TodoModule {}
