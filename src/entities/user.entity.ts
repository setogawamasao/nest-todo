import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../models/user';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  loginId: string;

  @Column()
  password: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  FromModel = (model: User) => {
    this.loginId = model.loginId;
    this.password = model.password;
  };

  toModel = () => {
    const user = new User();
    user.loginId = this.loginId;
    user.password = this.password;
    return user;
  };
}
