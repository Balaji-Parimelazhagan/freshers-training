import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  userRole;

  constructor(
    public loginService: LoginService
  ) {
    if (loginService.getUserRole()?.role === 'trainee') {
      this.menu[0].children?.forEach(children => {
        if (children.title !== 'Daily Status') {
          children.hidden = true;
        }
      });
    } else {
      this.menu[0].children?.forEach(children => {
        children.hidden = false;
      });
    }
  }
}
