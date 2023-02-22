import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_TRAININGS } from 'src/app/constants/routes';
import { FreshersTrainingComponent } from './freshers-training.component';

const routes: Routes = [
  {
    path:'',component:FreshersTrainingComponent
  },
  {
    path:MY_TRAININGS.path,
    loadChildren:() => import('./my-trainings/my-trainings.module').then((m)=>m.MyTrainingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreshersTrainingRoutingModule { }
