import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { UpcomingTrainingCardComponent } from './upcoming-training-card/upcoming-training-card.component';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { JobCardModule } from 'src/app/components/job-card/job-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AbsolutePipeModule } from 'src/app/pipes/absolutePipe/absolute-path.module';
import { MatButtonModule } from '@angular/material/button';
// import { TrainingDetailsComponent } from './training-details/training-details.component';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent,
    UpcomingTrainingCardComponent,
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    FooterModule,
    JobCardModule,
    MatDialogModule,
    AbsolutePipeModule,
    MatButtonModule,
  ]
})
export class UpcomingTrainingsModule { }
