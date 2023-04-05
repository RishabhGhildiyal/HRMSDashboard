import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelRoutingModule } from './cancel-routing.module';
import { CancelComponent } from './cancel.component';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { FooterModule } from 'src/app/modules/feature/feature-parts/footer/footer.module';
import { ListingModule } from 'src/app/modules/common/common-table/listing/listing.module';


@NgModule({
  declarations: [
    CancelComponent
  ],
  imports: [
    CommonModule,
    CancelRoutingModule,
    ForDirectiveModule,
    commonTableModule,
    FooterModule,
    ListingModule
  ]
})
export class CancelModule { }
