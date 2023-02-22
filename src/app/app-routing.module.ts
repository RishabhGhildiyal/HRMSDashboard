import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, DASHBOARD } from './constants/routes';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , redirectTo: AUTH.path , pathMatch : 'full'},
  {
    path:AUTH.path, loadChildren:() => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:DASHBOARD.path,
    canActivate:[AuthGuard],
    loadChildren:() => import('../app/modules/feature/feature.module').then(m => m.FeatureModule)
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
