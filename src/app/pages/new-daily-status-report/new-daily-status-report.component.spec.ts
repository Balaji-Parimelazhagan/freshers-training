import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDailyStatusReportComponent } from './new-daily-status-report.component';

describe('NewDailyStatusReportComponent', () => {
  let component: NewDailyStatusReportComponent;
  let fixture: ComponentFixture<NewDailyStatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDailyStatusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDailyStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
