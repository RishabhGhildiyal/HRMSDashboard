import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        PunchLogComponent
    ],
    imports: [
        CommonModule,
        PunchLogRoutingModule,
        commonTableModule,
        FooterModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ]
})
export class PunchLogModule { }
