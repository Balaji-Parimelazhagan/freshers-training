import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { TraineesComponent } from './trainees/trainees.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { ProfileComponent } from './profile/profile.component';
import { DailyStatusReportsComponent } from './daily-status-reports/daily-status-reports.component';
import { NewDailyStatusReportComponent } from './new-daily-status-report/new-daily-status-report.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';
import { CompleteAssessmentComponent } from './complete-assessment/complete-assessment.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'new-task',
      component: NewTaskComponent,
    },
    {
      path: 'new-project',
      component: NewProjectComponent,
    },
    {
      path: 'new-team',
      component: NewTeamComponent,
    },
    {
      path: 'new-trainee',
      component: NewTraineeComponent,
    },
    {
      path: 'new-assessment',
      component: NewAssessmentComponent,
    },
    {
      path: 'trainees',
      component: TraineesComponent,
    },
    {
      path: 'trainers',
      component: TrainersComponent,
    },
    {
      path: 'teams',
      component: TeamsComponent,
    },
    {
      path: 'tasks',
      component: TasksComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'assessments',
      component: AssessmentsComponent,
    },
    {
      path: 'new-daily-status',
      component: NewDailyStatusReportComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'dsrs',
      component: DailyStatusReportsComponent,
    },
    {
      path: 'complete-assessment',
      component: CompleteAssessmentComponent,
    },
    {
      path: 'assessment-details',
      component: AssessmentDetailsComponent,
    }
    /*,
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    }*/,
    {
      path: '',
      redirectTo: 'trainees',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
