import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { DatePipe } from '@angular/common'
import { UpdateTaskData } from '../store/app-store.actions';
import { selectTaskData } from '../store/app-store.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  assigner = 'Balaji P'

  createTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskDescription: new FormControl(''),
    assignee: new FormControl(''),
    taskPriority: new FormControl(''),
    taskDueDate: new FormControl(''),
    project: new FormControl(''),
    taskStatus: new FormControl(''),
    techStack: new FormControl(''),
    taskReference: new FormControl('')
  });

  public assignees = [
    {id: 1, name: 'Arjun'},
    {id: 2, name: 'Yuvanath'},
    {id: 3, name: 'Balaji'},
    {id: 4, name: 'Mani'},
    {id: 5, name: 'Sathish'}
  ];
  public projects = [
    {id: 1, name: 'Consent'},
    {id: 2, name: 'POV'},
    {id: 3, name: 'NetSmart'},
    {id: 1, name: 'iAssisstant'},
    {id: 1, name: 'ICL'}
  ];
  public techStacks = [
    {id: 1, name: 'Spring'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'NodeJS'},
    {id: 4, name: 'React'},
    {id: 5, name: 'Struts'}
  ];
  public selectedAssignees = [];
  public selectedProject = [];
  public selectedTechStacks = [];

  constructor(private store: Store<any>, public datepipe: DatePipe,  private router: Router) { }
  onSubmit() {
    console.log(this.createTaskForm.value);
    const task = this.createTaskObject(this.createTaskForm.value);
    this.store.dispatch(new UpdateTaskData(task.id, task));
    this.router.navigate(['/pages/tasks']);
  }

  createTaskObject(formValue) {
    let taskId = 1;
    const taskDate = this.datepipe.transform(formValue.taskDueDate, 'dd/MM/yyyy');
    this.store.select(selectTaskData).pipe(take(1), map(taskData => {
      if (taskData) {
        taskId =  Object.keys(taskData).length + 1;
        console.log('appData', taskData);
      }
    })).subscribe();
    const task = {
      id: taskId,
      title: formValue.taskTitle,
      project: formValue.project,
      priority: formValue.taskPriority,
      assignee: formValue.assignee,
      assigner: this.assigner,
      assignedOn: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
      dueDate: taskDate,
      techStack: formValue.techStack,
      status: formValue.taskStatus
    }
    return task;
  }

  ngOnInit(): void {
  }

}
