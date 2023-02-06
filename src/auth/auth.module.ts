import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService],
})
export class AuthModule {}
