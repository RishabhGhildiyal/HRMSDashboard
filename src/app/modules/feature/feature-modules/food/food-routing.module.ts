import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  PURCHASE_LUNCH_COUPON, REQUEST_DINNER } from 'src/app/constants/routes';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path:'', component:FoodComponent
  },
  {
    path: PURCHASE_LUNCH_COUPON.path,
    loadChildren: () => import('./purchase-lunch-coupon/purchase-lunch-coupon.module').then((m)=>m.PurchaseLunchCouponModule)
  },
  {
    path:REQUEST_DINNER.path,
    loadChildren: () =>import('./request-dinner/request-dinner.module').then((m)=>m.RequestDinnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
