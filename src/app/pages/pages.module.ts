import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbChatModule, NbDatepickerModule, NbInputModule, NbMenuModule, NbSelectModule, NbTabsetModule, NbTreeGridModule, NbIconModule, NbTooltipModule, NbProgressBarModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TraineesComponent } from './trainees/trainees.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DailyStatusReportsComponent } from './daily-status-reports/daily-status-reports.component';
import { NewDailyStatusReportComponent } from './new-daily-status-report/new-daily-status-report.component';
import { DialoguePromptComponent } from './dialogue-prompt/dialogue-prompt.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';
import { CompleteAssessmentComponent } from './complete-assessment/complete-assessment.component';
import { CommentsModalComponent } from './complete-assessment/comments-modal/comments-modal.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbAccordionModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbTreeGridModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule,
    ThemeModule,
    NgSelectModule,
    NbChatModule,
    NbButtonModule,
    NbTabsetModule,
    NbIconModule,
    FormsModule,
    NbChatModule,
    NbTabsetModule,
    NbTooltipModule,
    NbProgressBarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    TraineesComponent,
    NewTaskComponent,
    NewProjectComponent,
    TasksComponent,
    ProjectsComponent,
    AssessmentsComponent,
    NewTeamComponent,
    NewTraineeComponent,
    NewAssessmentComponent,
    ProfileComponent,
    DailyStatusReportsComponent,
    NewDailyStatusReportComponent,
    DialoguePromptComponent,
    AssessmentDetailsComponent,
    CompleteAssessmentComponent,
    CommentsModalComponent,
    TrainersComponent,
    TeamsComponent,
  ],
})
export class PagesModule {
}
