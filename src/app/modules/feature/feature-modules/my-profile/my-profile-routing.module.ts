import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASICINFO, CHANGEPASSWORD, PROFILEPICTURE, QUALIFICATION, SHIFT } from 'src/app/constants/routes';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {
    path:'', component:MyProfileComponent,
    children: [
      {
        path:'',
        redirectTo: 'basic-info',
        pathMatch:'full'
      },
      {
        path: BASICINFO.path,
        loadChildren:() => import('./basic-info/basic-info.module').then((m)=> m.BasicInfoModule)
      },
      {
        path:PROFILEPICTURE.path,
        loadChildren:() => import('./profile-picture/profile-picture.module').then((m)=>m.ProfilePictureModule)
      },
      {
        path:QUALIFICATION.path,
        loadChildren:() => import('./qualification/qualification.module').then((m)=>m.QualificationModule)
      },
      {
        path:SHIFT.path,
        loadChildren:() => import('./shift/shift.module').then((m)=> m.ShiftModule)
      },
      {
        path:CHANGEPASSWORD.path,
        loadChildren:() => import('./change-password/change-password.module').then((m)=>m.ChangePasswordModule)
      },
      {
        path:'appraisal',
        loadChildren:() =>import('./appraisal/appraisal.module').then((m)=>m.AppraisalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
