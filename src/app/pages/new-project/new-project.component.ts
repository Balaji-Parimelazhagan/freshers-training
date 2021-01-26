import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { UpdateProjectData } from '../store/app-store.actions';
import { selectProjectData } from '../store/app-store.selectors';

@Component({
  selector: 'ngx-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {


  createProjectForm = new FormGroup({
    projectTitle: new FormControl(''),
    projectDescription: new FormControl(''),
    projectManager: new FormControl(''),
    // projectStartDate: new FormControl(''),
    // projectDueDate: new FormControl(''),
    techStack: new FormControl(''),
    teamMembers: new FormControl(''),
    // projectStatus: new FormControl('')
  });

  public managers = [
    {id: 1, name: 'Vijay'},
    {id: 2, name: 'Maharaja'},
    {id: 3, name: 'Kalpana'}
  ];
  public techStacks = [
    {id: 1, name: 'Spring'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'NodeJS'},
    {id: 4, name: 'React'},
    {id: 5, name: 'Struts'}
  ];
  public teamMembers = [
    {id: 1, name: 'Balaji'},
    {id: 2, name: 'Mani'},
    {id: 3, name: 'Sathish'}
  ];
  public selectedManagers = [];
  public selectedTechStacks = [];
  public selectedTeamMembers = [];

  constructor(private store: Store<any>, public datepipe: DatePipe,  private router: Router) { }
  onSubmit() {
    console.log(this.createProjectForm.value);
    const project = this.createProjectObject(this.createProjectForm.value);
    this.store.dispatch(new UpdateProjectData(project.id, project));
    this.router.navigate(['/pages/projects']);
  }

  createProjectObject(formValue) {
    let projectId = 1;
    this.store.select(selectProjectData).pipe(take(1), map(projectData => {
      if (projectData) {
        projectId =  Object.keys(projectData).length + 1;
        console.log('projectData', projectData);
      }
    })).subscribe();
    const project = {
      id: projectId,
      title: formValue.projectTitle,
      description: formValue.projectDescription,
      managers: formValue.projectManager,
      members: formValue.teamMembers,
      startDate: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
      dueDate: null,
      techStacks: formValue.techStack,
      status: 'Active'
    }
    return project;
  }


  ngOnInit(): void {
  }

}
