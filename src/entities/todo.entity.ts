import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  dueDate?: Date;

  @Column('boolean', { default: false })
  idDone: boolean;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
