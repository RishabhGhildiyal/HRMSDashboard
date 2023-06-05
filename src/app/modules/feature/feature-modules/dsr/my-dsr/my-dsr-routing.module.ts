import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDsrComponent } from './my-dsr.component';
import { DSR_DETAILS } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path:'', component:MyDsrComponent
  },
  {
    path:DSR_DETAILS.path,
    loadChildren:() => import('./dsr-details/dsr-details.module').then((m)=>m.DsrDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDsrRoutingModule { }
