import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { JobCardModule } from 'src/app/components/job-card/job-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { AbsolutePipeModule } from 'src/app/pipes/absolutePipe/absolute-path.module';

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
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    AbsolutePipeModule
  ]
})
export class MyTrainingsModule { }
