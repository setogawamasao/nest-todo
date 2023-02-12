import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.baseUrl === '/login') {
      console.log('login middleware');
    }
    next();
  }
}
