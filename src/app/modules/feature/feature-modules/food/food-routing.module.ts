import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path:'',
    component:FoodComponent
  },
  {
    path:'purchase-coupons',
    loadChildren: ()=> import('./purchase-lunch-coupon/purchase-lunch-coupon.module').then((m)=>m.PurchaseLunchCouponModule)
  },
  {
    path:'request-dinner',
    loadChildren: () => import('./dinner/dinner.module').then((m)=>m.DinnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
