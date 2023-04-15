import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentJobRoutingModule } from './current-job-routing.module';
import { CurrentJobComponent } from './current-job.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CurrentJobComponent,
    TermsDialogComponent
  ],
  imports: [
    CommonModule,
    CurrentJobRoutingModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class CurrentJobModule { }
