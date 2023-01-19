import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { dataSource } from './config/ormconfig';
import { UserModule } from './user/user.module';
console.log(dataSource.options);
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options as TypeOrmModuleOptions),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
