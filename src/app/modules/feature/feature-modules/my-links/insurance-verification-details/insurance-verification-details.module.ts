import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceVerificationDetailsRoutingModule } from './insurance-verification-details-routing.module';
import { InsuranceVerificationDetailsComponent } from './insurance-verification-details.component';


@NgModule({
  declarations: [
    InsuranceVerificationDetailsComponent
  ],
  imports: [
    CommonModule,
    InsuranceVerificationDetailsRoutingModule
  ]
})
export class InsuranceVerificationDetailsModule { }
