import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshersTrainingRoutingModule } from './freshers-training-routing.module';
import { FreshersTrainingComponent } from './freshers-training.component';


@NgModule({
  declarations: [
    FreshersTrainingComponent
  ],
  imports: [
    CommonModule,
    FreshersTrainingRoutingModule
  ]
})
export class FreshersTrainingModule { }
