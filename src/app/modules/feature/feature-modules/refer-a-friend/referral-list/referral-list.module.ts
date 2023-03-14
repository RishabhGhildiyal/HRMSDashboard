import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';


@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    commonTableModule
  ]
})
export class ReferralListModule { }
