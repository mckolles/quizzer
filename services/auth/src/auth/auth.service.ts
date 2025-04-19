import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateOAuthLogin(user: any) {
    // тут можно добавить пользователя в БД
    console.log('GitHub user:', user);
    return user;
  }
}
