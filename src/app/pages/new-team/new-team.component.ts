import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  createTeamForm = new FormGroup({
    teamTitle: new FormControl(''),
    teamMentors: new FormControl(''),
    trainers: new FormControl(''),
    teamMembers: new FormControl(''),
    teamStartDate: new FormControl('')
  });

  public mentors = [
    {id: 1, name: 'Vijay'},
    {id: 2, name: 'Maharaja'},
    {id: 3, name: 'Kalpana'}
  ];
  public teamMembers = [
    {id: 1, name: 'Balaji'},
    {id: 2, name: 'Mani'},
    {id: 3, name: 'Sathish'}
  ];

  public trainers = [
    {id: 1, name: 'Arjun'},
    {id: 2, name: 'Yuvanath'},
    {id: 3, name: 'Balaji'},
    {id: 4, name: 'Mani'},
    {id: 5, name: 'Sathish'}
  ];
  public selectedMentors = [];
  public selectedTeamMembers = [];
  public selectedTrainers = [];

  constructor() { }

  onSubmit() {
    console.log(this.createTeamForm.value);
  }

  ngOnInit(): void {
  }

}
