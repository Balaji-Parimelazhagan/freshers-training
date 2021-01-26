import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-new-daily-status-report',
  templateUrl: './new-daily-status-report.component.html',
  styleUrls: ['./new-daily-status-report.component.scss']
})
export class NewDailyStatusReportComponent implements OnInit {

  createDSRForm = new FormGroup({
    dsrTask: new FormControl(''),
    dsrDescription: new FormControl(''),
    dsrGitLink: new FormControl(''),
    dsrReference: new FormControl(''),
    dsrFileUpload: new FormControl('')
  });

  public tasks = [
    {id: 1, name: 'Hibernate'},
    {id: 2, name: 'Spring'},
    {id: 3, name: 'Collections'}
  ];

  public selectedTask = [];
  
  constructor() { }

  onSubmit() {
    console.log(this.createDSRForm.value);
  }

  ngOnInit(): void {
  }

}
