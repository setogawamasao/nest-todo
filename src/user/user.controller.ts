import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './dto/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/authenticate')
  authenticate(@Body() userDto: UserDto) {
    const user = new User();
    user.fromDto(userDto);
    return this.userService.authenticate(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() userDto: UserDto) {
    const user = new User();
    user.fromDto(userDto);
    return this.userService.create(user);
  }

  @Patch()
  update(@Body() userDto: UserDto) {
    const user = new User();
    user.fromDto(userDto);
    return this.userService.update(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
