import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAssessmentComponent } from './complete-assessment.component';

describe('CompleteAssessmentComponent', () => {
  let component: CompleteAssessmentComponent;
  let fixture: ComponentFixture<CompleteAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
