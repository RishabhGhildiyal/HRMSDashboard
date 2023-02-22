import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_TRAINING, ONGOING_TRAININGS, REQUESTED_TRAININGS, UPCOMING_TRAININGS } from 'src/app/constants/routes';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  {
    path:'', component:TrainingComponent
  },
  {
    path:MY_TRAINING.path,
    loadChildren:() => import('./my-trainings/my-trainings.module').then((m)=>m.MyTrainingsModule)
  },
  {
    path:ONGOING_TRAININGS.path,
    loadChildren:() => import('./ongoing-trainings/ongoing-trainings.module').then((m)=>m.OngoingTrainingsModule)
  },
  {
    path:REQUESTED_TRAININGS.path,
    loadChildren:() => import('./requested-trainings/requested-trainings.module').then((m)=>m.RequestedTrainingsModule)
  },
  {
    path:UPCOMING_TRAININGS.path,
    loadChildren:() => import('./upcoming-trainings/upcoming-trainings.module').then((m)=>m.UpcomingTrainingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
