import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userRole;

  constructor() { }

  setUserRole(role) {
    this.userRole = role;
  }

  getUserRole() {
    return this.userRole;
  }
}
