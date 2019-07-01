import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsearchComponent } from 'src/app/components/modules/project/components/jobsearch/jobsearch.component';
import { TableComponent } from 'src/app/components/table/table.component';

const routes: Routes = [
  {
    path: 'project/jobsearch',
    component: JobsearchComponent
  },
  {
    path: 'project/dashboard',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
