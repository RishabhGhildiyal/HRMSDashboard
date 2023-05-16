import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import {MatSelectModule} from '@angular/material/select';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowErrorModule } from "../../../../../pipes/showErrorPipe/show-error.module";


@NgModule({
    declarations: [
        MyLeaveComponent
    ],
    imports: [
        CommonModule,
        MyLeaveRoutingModule,
        MatIconModule,
        FooterModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        ForDirectiveModule,
        FooterModule,
        MatSelectModule,
        commonTableModule,
        MatIconModule,
        AngularEditorModule,
        InputSearchModule,
        NgxMaterialTimepickerModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        ShowErrorModule
    ]
})
export class MyLeaveModule { }
