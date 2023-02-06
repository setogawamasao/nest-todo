import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { User } from '../user/dto/User';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/authenticate')
  authenticate(@Body() userDto: UserDto) {
    const user = new User();
    user.fromDto(userDto);
    return this.authService.authenticate(user);
  }
}
