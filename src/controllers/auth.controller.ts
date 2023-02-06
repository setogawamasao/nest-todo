import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../models/user';

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
