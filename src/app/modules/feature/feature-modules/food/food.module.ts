import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { CouponHistoryComponent } from './coupon-history/coupon-history.component';


@NgModule({
  declarations: [
    FoodComponent,
    CouponHistoryComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
