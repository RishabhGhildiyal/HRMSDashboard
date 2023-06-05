import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailsRoutingModule } from './dsr-details-routing.module';
import { DsrDetailsComponent } from './dsr-details.component';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { ListingModule } from "../../../../../common/common-table/listing/listing.module";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        DsrDetailsComponent
    ],
    imports: [
        CommonModule,
        DsrDetailsRoutingModule,
        commonTableModule,
        ForDirectiveModule,
        ListingModule,
        MatIconModule
    ]
})
export class DsrDetailsModule { }
