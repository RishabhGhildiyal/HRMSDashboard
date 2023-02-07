import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
{
  path:'',component:FeatureComponent, children:[
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
  },
    {
      path:'home',
      loadChildren:()=>
      import('../feature/home/home.module').then((m)=>m.HomeModule)
    },
    {
      path:'my-profile',
      loadChildren: () =>
      import('../feature/my-profile/my-profile.module').then((m)=>m.MyProfileModule)
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
