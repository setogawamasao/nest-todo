import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/dto/user';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async authenticate(user: User) {
    const target = await this.userRepository.findOne({
      where: { loginId: user.loginId },
    });

    let isAuthenticated: boolean;
    if (user.password === target.toModel().password) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }

    return { isAuthenticated };
  }
}
