import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCouponRoutingModule } from './lunch-coupon-routing.module';
import { LunchCouponComponent } from './lunch-coupon.component';


@NgModule({
  declarations: [
    LunchCouponComponent
  ],
  imports: [
    CommonModule,
    LunchCouponRoutingModule
  ]
})
export class LunchCouponModule { }
