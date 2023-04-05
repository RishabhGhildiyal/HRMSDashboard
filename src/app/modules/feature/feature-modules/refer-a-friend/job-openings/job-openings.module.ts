import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';
// import { JobCardComponent } from 'src/app/components/job-card/job-card.component';
import { JobCardModule } from 'src/app/components/job-card/job-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobOpeningsComponent
  ],
  imports: [
    CommonModule,
    JobOpeningsRoutingModule,
    JobCardModule,
    MatDialogModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JobOpeningsModule { }
