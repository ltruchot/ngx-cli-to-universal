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
  user: User = {name: '', password: ''};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login () {
    if (this.user.name === 'username' && this.user.password === '123') {
      this.loginService.login(this.user);
    } else {
      console.log('not');
    }
  }
}
