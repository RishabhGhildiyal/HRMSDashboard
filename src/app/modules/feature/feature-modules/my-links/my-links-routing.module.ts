import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOLIDAY_CALENDER, INSURANCE_VERIFICATION_DETAILS, POLICY_DOCUMENTS } from 'src/app/constants/routes';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {
    path:'', component:MyLinksComponent,

  },
  {
    path: HOLIDAY_CALENDER.path,
    loadChildren: () =>
      import(
        './holiday-calender/holiday-calender.module'
      ).then((m) => m.HolidayCalenderModule),
  },
  {
    path: INSURANCE_VERIFICATION_DETAILS.path,
    loadChildren: () =>
      import(
        './insurance-verification-details/insurance-verification-details.module'
      ).then((m) => m.InsuranceVerificationDetailsModule),
  },
  {
    path: POLICY_DOCUMENTS.path,
    loadChildren: () =>
      import(
        './policy-documents/policy-documents.module'
      ).then((m) => m.PolicyDocumentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
