import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from 'src/app/components/modules/project/project-routing.module';
import { JobsearchComponent } from 'src/app/components/modules/project/components/jobsearch/jobsearch.component';
import { ProjectsService } from 'src/app/components/modules/project/services/projects.service';

@NgModule({
  declarations: [JobsearchComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  providers: [ProjectsService]
})
export class ProjectModule { }
