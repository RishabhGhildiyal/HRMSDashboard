import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, DASHBOARD } from './constants/routes';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , redirectTo: 'auth' , pathMatch : 'full'},
  {
    path:AUTH.path, loadChildren:() => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:DASHBOARD.path, loadChildren:() => import('../app/modules/feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
