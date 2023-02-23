import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalenderRoutingModule } from './holiday-calender-routing.module';
import { HolidayCalenderComponent } from './holiday-calender.component';
import { FooterModule } from '../../../feature-parts/footer/footer.module';


@NgModule({
  declarations: [
    HolidayCalenderComponent
  ],
  imports: [
    CommonModule,
    HolidayCalenderRoutingModule,
    FooterModule
  ]
})
export class HolidayCalenderModule { }
