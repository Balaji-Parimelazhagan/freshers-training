import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from '../../service/login.service';
import { map, take } from 'rxjs/operators';
import { selectProjectData } from '../store/app-store.selectors';

@Component({
  selector: 'ngx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  role;
  projects;

  constructor(
    private store: Store<any>, public loginService: LoginService
  ) {
    this.role = loginService.getUserRole()?.role;
  }

  ngOnInit(): void {
    this.store.select(selectProjectData).pipe(take(1), map(projects => {
    this.projects = Object.values(projects);
  })).subscribe();
  }

}
