import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { ListingModule } from 'src/app/modules/common/common-table/listing/listing.module';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { InputSearchModule } from "../../../../common/input-search/input-search.module";


@NgModule({
    declarations: [
        MyDsrComponent
    ],
    imports: [
        CommonModule,
        MyDsrRoutingModule,
        AngularEditorModule,
        MatFormFieldModule,
        // NativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        ShowErrorModule,
        NgxMaterialTimepickerModule,
        FormsModule,
        ReactiveFormsModule,
        ForDirectiveModule,
        commonTableModule,
        ListingModule,
        MatNativeDateModule,
        MatInputModule,
        FooterModule,
        MatButtonModule,
        InputSearchModule
    ]
})
export class MyDsrModule { }
