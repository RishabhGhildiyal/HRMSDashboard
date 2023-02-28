import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftComponent } from './shift.component';
import {MatTableModule} from '@angular/material/table';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';

@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    MatTableModule,
    commonTableModule
  ]
})
export class ShiftModule { }
