import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DETAILS } from 'src/app/constants/routes';
import { MyTrainingsComponent } from './my-trainings.component';

const routes: Routes = [
  {
    path:'', component:MyTrainingsComponent
  },
  {
    path:DETAILS.path,
    loadChildren:() => import('./details/details.module').then((m)=>m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrainingsRoutingModule { }
