import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TICKETS } from 'src/app/constants/routes';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path:'', component:TicketsComponent
  },
  {
    path:TICKETS.path,
    loadChildren:() => import('./tickets/tickets.module').then((m)=>m.TicketsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
