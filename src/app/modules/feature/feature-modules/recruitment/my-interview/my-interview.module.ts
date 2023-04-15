import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { ListingModule } from 'src/app/modules/common/common-table/listing/listing.module';


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
        FooterModule,
        commonTableModule,
        ForDirectiveModule,
        ListingModule
    ]
})
export class MyInterviewModule { }
