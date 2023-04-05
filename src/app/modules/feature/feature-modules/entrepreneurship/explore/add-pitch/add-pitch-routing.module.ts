import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CANCEL } from 'src/app/constants/routes';
import { AddPitchComponent } from './add-pitch.component';

const routes: Routes = [
  {
    path:'',component:AddPitchComponent
  },
  {
    path:CANCEL.path,
    loadChildren:() => import('./cancel/cancel.module').then((m)=>m.CancelModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPitchRoutingModule { }
