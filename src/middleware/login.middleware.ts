import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.baseUrl === 'auth/login') {
      console.log('login middleware');
    }
    next();
  }
}
