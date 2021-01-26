import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NbCardModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesModule } from '../pages/pages.module';
import { LoginComponent } from './login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, UserLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbCardModule,
    NbLayoutModule,
    ThemeModule,
    PagesModule,
    NbMenuModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
