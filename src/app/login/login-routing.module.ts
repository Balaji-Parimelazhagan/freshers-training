import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'user',
        component: UserLoginComponent
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: UserLoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
