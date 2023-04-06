import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECT_DETAIL } from 'src/app/constants/routes';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path:'',component:ProjectsComponent
  },
  {
  path:PROJECT_DETAIL.path,
  loadChildren :() => import('./project-details/project-details.module').then((m)=>m.ProjectDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
