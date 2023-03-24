import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';

import { AttendanceComponent } from './attendance/attendance.component';
import { FooterModule } from 'src/app/modules/feature/feature-parts/footer/footer.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';


@NgModule({
  declarations: [
    DetailsComponent,
    TrainingDetailsComponent,
    SubTopicsComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatTabsModule,
    FooterModule,
    MatTableModule,
    MatPaginatorModule,
    commonTableModule,
    ForDirectiveModule
  ]
})
export class DetailsModule { }
