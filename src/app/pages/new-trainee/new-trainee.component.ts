import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-new-trainee',
  templateUrl: './new-trainee.component.html',
  styleUrls: ['./new-trainee.component.scss']
})
export class NewTraineeComponent implements OnInit {

  createTraineeForm = new FormGroup({
    batchTitle: new FormControl(''),
    streamInfo: new FormControl(''),
    teamName: new FormControl('')
  });

  public batches = [
    {id: 1, name: '2020-21'},
    {id: 2, name: '2019-20'},
    {id: 3, name: '2018-19'},
    {id: 4, name: '2017-18'},
    {id: 5, name: '2016-17'}
  ];
  public streams = [
    {id: 1, name: 'Developer'},
    {id: 2, name: 'Tester'}
  ];
  public teams = [
    {id: 1, name: 'Consent'},
    {id: 2, name: 'POV'},
    {id: 3, name: 'NetSmart'}
  ];
  public selectedBatch = [];
  public selectedStream = [];
  public selectedTeam = [];

  constructor() { }

  onSubmit() {
    console.log(this.createTraineeForm.value);
  }

  ngOnInit(): void {
  }

}
