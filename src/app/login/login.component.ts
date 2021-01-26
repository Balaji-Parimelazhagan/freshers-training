import { Component } from '@angular/core';

@Component({
  selector: 'ngx-login',
  styleUrls: ['login.component.scss'],
  template: `
    <ngx-two-columns-layout>
      <router-outlet></router-outlet>
    </ngx-two-columns-layout>
  `,
})
export class LoginComponent { }
