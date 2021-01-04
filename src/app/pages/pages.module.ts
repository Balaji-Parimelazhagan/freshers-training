import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbMenuModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';

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
    ThemeModule
  ],
  declarations: [
    PagesComponent,
    TraineesComponent,
    NewTaskComponent,
    NewProjectComponent,
    TasksComponent,
    ProjectsComponent,
    AssessmentsComponent,
  ],
})
export class PagesModule {
}
