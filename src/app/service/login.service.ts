import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email, senha) {
    if (email === 'teste@gmail.com' && senha === '123456') {
      return 'a711jdnf'
    }
    return ''
  }

  setToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoff() {
    localStorage.removeItem('token')
  }

  isLoggedIn() {
    let token = this.getToken()
    if (token) {
      return true
    }
    return false
  }

}
