import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchCalenderComponent } from './lunch-calender.component';

const routes: Routes = [
  {
    path:'', component:LunchCalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchCalenderRoutingModule { }
