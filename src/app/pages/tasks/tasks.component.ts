import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialoguePromptComponent } from '../dialogue-prompt/dialogue-prompt.component';


import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { selectTaskData } from '../store/app-store.selectors';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public comment: string;

  public tasks = [];


  constructor(private dialogService: NbDialogService, private store: Store<any>) { }

  openConfirmationBox(task) {
    this.dialogService.open(DialoguePromptComponent)
      .onClose.subscribe(comment => {
        this.comment = comment;
      });
  }

  ngOnInit(): void {
    // this.store.select(selectTaskData).pipe(take(1), map(taskDatas => {
    //   this.tasks = Object.values(taskDatas);
    // })).subscribe();
    this.tasks = [
      {
        title: 'Basic java programming',
        typicalDuration: '1 day',
        stream:'General',
        type:'Basic'
      },
      {
        title: 'Layered approach',
        typicalDuration: '3 days',
        stream:'General',
        type:'Basic'
      },
      {
        title: 'Micro application',
        typicalDuration: '3 days',
        stream:'General',
        type:'Basic'
      },
      {
        title: 'JDBC and collections',
        typicalDuration: '3 days',
        stream:'Backend',
        type:'Intermediate'
      },
      {
        title: 'Hibernate',
        typicalDuration: '4 days',
        stream:'Backend',
        type:'Intermediate'
      },
      {
        title: 'Spring IOC and MVC',
        typicalDuration: '4 days',
        stream:'Backend',
        type:'Advanced'
      }
    ]
  }

}
