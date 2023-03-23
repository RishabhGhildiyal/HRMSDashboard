import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FooterModule } from '../../../feature-parts/footer/footer.module';


@NgModule({
  declarations: [
    MyInterviewComponent
  ],
  imports: [
    CommonModule,
    MyInterviewRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FooterModule
  ]
})
export class MyInterviewModule { }
