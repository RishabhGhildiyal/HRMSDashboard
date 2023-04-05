import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VIEW_DETAILS } from 'src/app/constants/routes';
import { MyLeaveComponent } from './my-leave.component';

const routes: Routes = [
  {
    path:'', component:MyLeaveComponent
  },
  {
    path:VIEW_DETAILS.path,
    loadChildren:() => import('../my-leave/view-details/view-details.module').then((m)=>m.ViewDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLeaveRoutingModule { }
