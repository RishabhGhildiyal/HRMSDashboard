import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CURRENT_JOB } from 'src/app/constants/routes';
import { JobOpeningsComponent } from './job-openings.component';

const routes: Routes = [
  {
    path:'', component:JobOpeningsComponent
  },
  {
    path:CURRENT_JOB.path,
    loadChildren: () => import('./current-job/current-job.module').then((m)=>m.CurrentJobModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOpeningsRoutingModule { }
