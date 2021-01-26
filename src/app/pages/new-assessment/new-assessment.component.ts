import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { DatePipe } from '@angular/common'
import { UpdateAssessmentData } from '../store/app-store.actions';
import { selectAssessmentData } from '../store/app-store.selectors';

@Component({
  selector: 'ngx-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit {


  createAssessmentForm = new FormGroup({
    assessmentTitle: new FormControl(''),
    assessmentDescription: new FormControl(''),
    assessmentDate: new FormControl(''),
    trainees: new FormControl(''),
    teams: new FormControl('')
  });

  public trainees = [
    {id: 1, name: 'Arjun'},
    {id: 2, name: 'Yuvanath'},
    {id: 3, name: 'Balaji'}, 
    {id: 4, name: 'Mani'},
    {id: 5, name: 'Sathish'}
  ];
  public teams = [
    {id: 1, name: 'Consent'},
    {id: 2, name: 'POV'},
    {id: 3, name: 'NetSmart'}
  ];
  public selectedTrainees = [];
  public selectedTeams = [];

  constructor(private store: Store<any>, 
    private datepipe: DatePipe, 
    private router: Router) { }
  onSubmit() {
    console.log(this.createAssessmentForm.value);
    const assessment = this.createAssessmentObject(this.createAssessmentForm.value);
    this.store.dispatch(new UpdateAssessmentData(assessment.id, assessment));
    this.router.navigate(['/pages/assessments']);
  }

  createAssessmentObject(formValue) {
    let assessmentId = 1;
    const assessmentDate = this.datepipe.transform(formValue.assessmentDate, 'dd/MM/yyyy');
    this.store.select(selectAssessmentData).pipe(take(1), map(assessmentData => {
      if (assessmentData) {
        assessmentId =  Object.keys(assessmentData).length + 1;
        console.log('appData', assessmentData);
      }
    })).subscribe();
    const assessment = {
      id: assessmentId,
      title: formValue.assessmentTitle,
      team: formValue.teams,
      trainee: formValue.trainees,
      assessmentDate: assessmentDate
    }
    return assessment;
  }

  ngOnInit(): void {
  }

}
