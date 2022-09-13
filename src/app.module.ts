import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'todo-user',
      password: 'todo-pass',
      database: 'todo-db',
      entities: ['dist/entities/**/*.entity.js'],
      migrations: ['dist/migrations/**/*.js'],
      synchronize: true,
      logging: true,
      cache: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
