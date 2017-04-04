import { Injectable } from '@angular/core';
import { User } from './login.d';
import { LocalStorageService } from 'angular-2-local-storage';
// import { LocalStorageService } from '../shared/localStorage.service';

@Injectable()
export class LoginService {
  user: User = {name: '', connected: false};

  constructor(private localStorageService: LocalStorageService) {
    if (this.localStorageService.get('user')) {
      this.login(this.localStorageService.get('user'));
    }
   }

  login (user) {
    this.user.name = user.name;
    this.user.connected = true;
    this.localStorageService.set('user', this.user);
  }

  logout () {
    this.user.name = '';
    this.user.connected = false;
    this.localStorageService.remove('user');
  }
}
