import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Todo } from '../models/todo';

@Entity({ name: 'todo' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  dueDate: Date;

  @Column('boolean', { default: false })
  isDone: boolean;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  FromModel = (model: Todo) => {
    this.title = model.title;
    this.description = model.description;
    this.dueDate = model.dueDate;
    this.isDone = model.isDone;
  };
}
