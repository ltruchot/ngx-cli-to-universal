import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { User } from './login.d';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  user: User = {name: '', connected: false};
  password: string;
  message: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = this.loginService.user;
  }

  ngOnInit() {
  }

  login () {
    if (this.user.name === 'username' && this.password === '123') {
      this.loginService.login(this.user);
      this.message = '';
    } else {
      this.message = 'Not connected.';
    }
  }

  logout () {
    this.loginService.logout();
  }
}
