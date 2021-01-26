import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss']
})
export class CommentsModalComponent implements OnInit {

  constructor(protected ref: NbDialogRef<CommentsModalComponent>) { }

  ngOnInit(): void {
  }

  metricComments = new FormGroup({
    metricOne: new FormControl(''),
    metricTwo: new FormControl(''),
    metricThree: new FormControl(''),
    metricFour: new FormControl(''),
    metricFive: new FormControl('')
  });
  
  submit() {
    console.log('form-output', this.metricComments.value)
    this.ref.close(this.metricComments.value);
  }
  
  cancel() {
    this.ref.close();
  }


}
