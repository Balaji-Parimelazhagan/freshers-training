import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguePromptComponent } from './dialogue-prompt.component';

describe('DialoguePromptComponent', () => {
  let component: DialoguePromptComponent;
  let fixture: ComponentFixture<DialoguePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoguePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
