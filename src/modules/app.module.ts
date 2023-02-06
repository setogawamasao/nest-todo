import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoModule } from '../models/todo.module';
import { dataSource } from '../config/ormconfig';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
console.log(dataSource.options);
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options as TypeOrmModuleOptions),
    TodoModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
