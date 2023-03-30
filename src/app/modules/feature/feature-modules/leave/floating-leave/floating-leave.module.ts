import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';


@NgModule({
    declarations: [
        FloatingLeaveComponent
    ],
    imports: [
        CommonModule,
        FloatingLeaveRoutingModule,
        commonTableModule,
        ForDirectiveModule,
        FooterModule
    ]
})
export class FloatingLeaveModule { }
