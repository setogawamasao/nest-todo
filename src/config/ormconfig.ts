import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'todo-user',
  password: 'todo-pass',
  database: 'todo-db',
  // entities: ['src/entities/*.entity.ts'],
  // migrations: ['src/migrations/*.ts'],
  entities: ['dist/entities/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  synchronize: true,
  logging: true,
});
