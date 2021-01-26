import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectAssessmentData } from '../store/app-store.selectors';
@Component({
  selector: 'ngx-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {

  // public assessments = [];
  role;

  constructor(private store: Store<any>, private loginService: LoginService) {
    this.role = loginService.getUserRole()?.role;
  }

  ngOnInit(): void {
    // this.store.select(selectAssessmentData).pipe(take(1), map(assessmentDatas => {
    //   this.assessments = Object.values(assessmentDatas);
    // })).subscribe();
  }

  assessments = [
    {
      title: 'Layered micro application with coding guidelines',
      assessmentDate: '22/01/2021',
      assessedSkill: 'Programming',
      weightage: 'High',
      status: 'In-Progress',
      isCompleted: false
    },
    {
      title: 'Servlets and JSPs',
      assessmentDate: '15/01/2021',
      assessedSkill: 'UI/UX and filters',
      weightage: 'High',
      status: 'Completed', 
      isCompleted: true
    },
    {
      title: 'JDBC',
      assessmentDate: '08/01/2021',
      assessedSkill: 'RDBMS and best practices',
      weightage: 'Medium',
      status: 'Completed', 
      isCompleted: true
    },
    {
      title: 'Hibernate',
      assessmentDate: '02/01/2021',
      assessedSkill: 'ORM',
      weightage: 'High',
      status: 'Completed', 
      isCompleted: true
    },
  ]
}
