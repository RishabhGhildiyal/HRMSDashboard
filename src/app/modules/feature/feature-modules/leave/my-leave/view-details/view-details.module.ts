import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailsRoutingModule } from './view-details-routing.module';
import { ViewDetailsComponent } from './view-details.component';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FooterModule } from 'src/app/modules/feature/feature-parts/footer/footer.module';

@NgModule({
  declarations: [
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewDetailsRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    FooterModule

  ]
})
export class ViewDetailsModule { }
