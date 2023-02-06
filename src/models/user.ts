import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

export class User {
  id: number;
  loginId: string;
  password: string;

  fromDto = (dto: UserDto) => {
    this.id = dto.id;
    this.loginId = dto.loginId;
    this.password = dto.password;
  };

  toEntity = (): UserEntity => {
    const entity = new UserEntity();
    entity.loginId = this.loginId;
    entity.password = this.password;
    return entity;
  };
}
