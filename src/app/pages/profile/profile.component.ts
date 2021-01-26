import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public employee = {
    name: 'Nicklaus Mikaelson',
    empId: 'I19019',
    dob: '27/01/1998',
    gender: 'Male',
    designation: 'Software Developer',
    phoneNumber: 'xxxxxxxxxxx',
    email: 'nick@i2i.com',
    project: 'NetSmart',
    experience: '5 years',
    techStacks: ['Java 11', 'Angular', 'JavaScript', 'Spring Boot 2.0' ],
    workHistories: [
      {
        project: 'Devero',
        from: '10/10/2019',
        to: '01/11/2020'
      },
      { 
        project: 'NetSmart Consent POV',
        from: '03/11/2020',
        to: 'present'
      },
      { 
        project: 'NetSmart',
        from: '03/11/2020',
        to: 'present'
      }
    ]
  }

  public trainee = {
    college: 'GCE Tirunelveli',
    CGPA: '7.5',
    school: 'BMC Matric School',
    mark: '1112',
    skills: ['Java', 'JavaScript']
  }
  public isTrainee = true;
  public isTrainer = true;

  constructor() { }

  ngOnInit(): void {
  }

}
