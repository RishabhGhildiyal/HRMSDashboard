import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipRoutingModule } from './entrepreneurship-routing.module';
import { EntrepreneurshipComponent } from './entrepreneurship.component';


@NgModule({
  declarations: [
    EntrepreneurshipComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipRoutingModule
  ]
})
export class EntrepreneurshipModule { }
