import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    public loginService: LoginService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      if (this.loginForm.value.userName === 'Sathish') {
        this.loginService.setUserRole({userName: this.loginForm.value.userName, role: 'trainee'});
      } else if (this.loginForm.value.userName === 'Mani') {
        this.loginService.setUserRole({userName: this.loginForm.value.userName, role: 'trainer'});
      }
      this.route.navigateByUrl('pages');
    }
  }


}
