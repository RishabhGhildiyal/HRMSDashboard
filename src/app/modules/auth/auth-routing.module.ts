import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
},
  {
    path:'',component: AuthComponent ,children:[

      {
        path:'login',
        loadChildren:()=>
        import('./login/login.module').then((m)=>m.LoginModule)
      },
      {
        path:'forget-password',
        loadChildren:() =>
        import('./forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
