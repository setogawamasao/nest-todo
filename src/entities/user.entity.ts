import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { Todo } from '../todo/dto/todo';

@Entity({ name: 'users' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  loginId: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  // FromModel = (model: Todo) => {
  //   this.title = model.title;
  //   this.description = model.description;
  //   this.dueDate = model.dueDate;
  //   this.isDone = model.isDone;
  // };
}
