import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponLegendComponent } from './coupon-legend.component';

const routes: Routes = [
  {
    path:'',component:CouponLegendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponLegendRoutingModule { }
