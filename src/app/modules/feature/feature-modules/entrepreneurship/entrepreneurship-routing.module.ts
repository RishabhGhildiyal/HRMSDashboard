import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH, EXPLORE } from 'src/app/constants/routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  {
    path: '',
    component: EntrepreneurshipComponent,
  },
  {
    path: EXPLORE.path,
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  {
    path: ADD_PITCH.path,
    loadChildren: () =>
      import('./explore/add-pitch/add-pitch.module').then(
        (m) => m.AddPitchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepreneurshipRoutingModule {}
