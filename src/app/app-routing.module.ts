import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', loadChildren:() => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'forget-password', loadChildren:() => import('../app/modules/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  {
    path:'dashboard', loadChildren:() => import('../app/modules/feature/feature.module').then(m => m.FeatureModule)
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
