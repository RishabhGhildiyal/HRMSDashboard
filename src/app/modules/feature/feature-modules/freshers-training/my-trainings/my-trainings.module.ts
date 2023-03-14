import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { JobCardModule } from 'src/app/components/job-card/job-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MyTrainingsComponent,
    FeedbackDialogComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    FooterModule,
    JobCardModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MyTrainingsModule { }
