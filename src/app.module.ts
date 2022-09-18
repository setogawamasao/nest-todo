import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { dataSource } from './config/ormconfig';
console.log(dataSource.options);
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options as TypeOrmModuleOptions),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
