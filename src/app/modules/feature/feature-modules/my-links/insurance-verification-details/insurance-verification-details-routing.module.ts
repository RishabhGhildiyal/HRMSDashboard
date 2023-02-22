import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceVerificationDetailsComponent } from './insurance-verification-details.component';

const routes: Routes = [
  {
    path:'',component:InsuranceVerificationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceVerificationDetailsRoutingModule { }
