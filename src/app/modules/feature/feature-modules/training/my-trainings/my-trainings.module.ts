import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { RequestTrainingDialogComponent } from './request-training-dialog/request-training-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    MyTrainingsComponent,
    RequestTrainingDialogComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    MatButtonModule,
    FooterModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MyTrainingsModule { }
