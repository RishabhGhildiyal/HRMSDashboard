import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AwardsDialogComponent } from './awards-dialog/awards-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MyPerformanceComponent,
    AwardsDialogComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FooterModule,
    MatOptionModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MyPerformanceModule { }
