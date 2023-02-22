import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIRECTORY, EXPLORE, HOME, MY_PROFILE } from 'src/app/constants/routes';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path:HOME.path,
        loadChildren: () =>
          import('./feature-modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: MY_PROFILE.path,
        loadChildren: () =>
          import('./feature-modules/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: EXPLORE.path,
        loadChildren: () =>
          import(
            './feature-modules/entrepreneurship/explore/explore.module'
          ).then((m) => m.ExploreModule),
      },
      {
        path:DIRECTORY.path,
        loadChildren:() =>
        import('./feature-modules/directory/directory.module').then((m) => m.DirectoryModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
