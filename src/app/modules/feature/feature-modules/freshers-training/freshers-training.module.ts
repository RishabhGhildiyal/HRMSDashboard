import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshersTrainingRoutingModule } from './freshers-training-routing.module';
import { FreshersTrainingComponent } from './freshers-training.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FreshersTrainingComponent
  ],
  imports: [
    CommonModule,
    FreshersTrainingRoutingModule,
    MatDialogModule,
    
  ]
})
export class FreshersTrainingModule { }
