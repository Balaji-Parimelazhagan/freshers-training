import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStatusReportsComponent } from './daily-status-reports.component';

describe('DailyStatusReportsComponent', () => {
  let component: DailyStatusReportsComponent;
  let fixture: ComponentFixture<DailyStatusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStatusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStatusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
