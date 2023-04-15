import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseLunchCouponRoutingModule } from './purchase-lunch-coupon-routing.module';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LunchCalenderModule } from '../lunch-calender/lunch-calender.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurchaseLunchCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseLunchCouponRoutingModule,
    MatFormFieldModule,
    LunchCalenderModule,
    ReactiveFormsModule
  ]
})
export class PurchaseLunchCouponModule { }
