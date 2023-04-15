import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCalenderRoutingModule } from './lunch-calender-routing.module';
import { LunchCalenderComponent } from './lunch-calender.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';

@NgModule({
  declarations: [LunchCalenderComponent],
  imports: [
    CommonModule,
    LunchCalenderRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    CouponLegendModule
  ],
  exports:[
    LunchCalenderComponent
  ]
})
export class LunchCalenderModule {}
