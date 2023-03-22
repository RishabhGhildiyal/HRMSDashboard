import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRAINING_DETAIL } from 'src/app/constants/routes';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';

const routes: Routes = [
  {
    path:'', component:UpcomingTrainingsComponent
  },
  {
    path:TRAINING_DETAIL.path,
    loadChildren:() => import('./training-details/training-details.module').then((m)=>m.TrainingDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingTrainingsRoutingModule { }
