import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    commonTableModule,
    FooterModule,
    MatFormFieldModule,
    MatSelectModule,
    ForDirectiveModule,
    MatButtonModule
  ]
})
export class ReferralListModule { }
