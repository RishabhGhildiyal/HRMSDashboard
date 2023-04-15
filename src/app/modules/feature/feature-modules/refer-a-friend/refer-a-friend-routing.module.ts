import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOB_OPENINGS, REFERRAL_LIST } from 'src/app/constants/routes';
import { ReferAFriendComponent } from './refer-a-friend.component';

const routes: Routes = [
  {
    path:'', component:ReferAFriendComponent
  },
  {
    path:JOB_OPENINGS.path,
    loadChildren:() => import('./job-openings/job-openings.module').then((m)=>m.JobOpeningsModule)
  },
  {
    path:REFERRAL_LIST.path,
    loadChildren:() => import('./referral-list/referral-list.module').then((m)=>m.ReferralListModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferAFriendRoutingModule { }
