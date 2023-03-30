import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { commonTableModule } from "../../../../common/common-table/common-table.module";

@NgModule({
    declarations: [
        ManualPunchComponent
    ],
    imports: [
        CommonModule,
        ManualPunchRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FooterModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ForDirectiveModule,
        commonTableModule
    ]
})
export class ManualPunchModule { }
