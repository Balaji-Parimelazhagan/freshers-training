import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Location } from '@angular/common';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userName = '';
  path = '';

  /*themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';*/

  userMenu = [ { title: 'Profile' }, { title: 'Log out', link: '/login/user' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private router: Router,
              private titleService:Title,
              private location: Location,
              private loginService: LoginService) {
                this.userName = loginService.getUserRole()?.userName;
                router.events.subscribe((val) => {
                  if (location.path()) {
                    // let splitStr;
                    this.path = location.path().split('/')[location.path().split('/').length - 1];
                    this.path = this.path.split('-').join(' ').toUpperCase();
                    this.titleService.setTitle(this.path);
                    this.path = this.path ==='DSRS' ? 'DAILY STATUS REPORTS - BALAJI PARIMELAZHAGAN' : this.path;
                    // splitStr = this.path.toLowerCase().split(' ');
                    // for (var i = 0; i < splitStr.length; i++) {
                    //   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                    // }
                    // this.path = splitStr.join(' ');
                  }
                });
  }

  ngOnInit() {
    // this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    // .pipe(takeUntil(this.destroy$))
    // .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.menuService.onItemClick()
      .pipe(
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title === 'Profile') this.router.navigateByUrl('/pages/profile');
      });

    // this.themeService.onThemeChange()
    //   .pipe(
    //     map(({ name }) => name),
    //     takeUntil(this.destroy$),
    //   )
    //   .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}