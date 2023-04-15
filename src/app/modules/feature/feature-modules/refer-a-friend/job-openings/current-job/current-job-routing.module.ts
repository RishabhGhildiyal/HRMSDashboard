import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentJobComponent } from './current-job.component';

const routes: Routes = [
  {
    path:'', component:CurrentJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentJobRoutingModule { }
