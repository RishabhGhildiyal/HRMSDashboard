import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipProgramRoutingModule } from './entrepreneurship-program-routing.module';
import { EntrepreneurshipProgramComponent } from './entrepreneurship-program.component';


@NgModule({
  declarations: [
    EntrepreneurshipProgramComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipProgramRoutingModule
  ]
})
export class EntrepreneurshipProgramModule { }
