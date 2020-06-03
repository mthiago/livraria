import { Component, OnInit } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { LoginService } from '../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) {
  }

  ngOnInit() {
    this.router.navigate(['/login'])
  }

  login(email, senha) {
    let token = this.service.login(email, senha)
    if (token != '') {
      this.service.setToken(token)
      this.router.navigate(['/lista'])
    }
  }

}
