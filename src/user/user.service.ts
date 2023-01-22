import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { User } from './dto/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: User) {
    return this.userRepository.save(user.toEntity());
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(user: User) {
    const userEntity = await this.findOne(user.id);
    if (!userEntity) {
      return undefined;
    }
    userEntity.FromModel(user);
    return this.userRepository.save(userEntity);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
