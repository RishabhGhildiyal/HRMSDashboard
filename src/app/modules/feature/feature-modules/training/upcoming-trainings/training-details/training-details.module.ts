import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import { FooterModule } from 'src/app/modules/feature/feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
// import { TrainingDetailsComponent } from './training-details/training-details.component';


@NgModule({
  declarations: [
    TrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    FooterModule,
    MatButtonModule,

  ]
})
export class TrainingDetailsModule { }
