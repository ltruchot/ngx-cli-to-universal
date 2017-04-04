import { Injectable } from '@angular/core';
import { User } from './login.d';

@Injectable()
export class LoginService {
  private connected = false;
  private user: User;

  constructor() { }

  login (user: User) {
    this.user = user;
    this.connected = true;
  }
}
