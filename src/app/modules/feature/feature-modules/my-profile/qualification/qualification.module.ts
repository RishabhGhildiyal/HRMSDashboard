import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { ListingModule } from 'src/app/modules/common/common-table/listing/listing.module';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        QualificationComponent,
        DialogComponentComponent,
    ],
    imports: [
        CommonModule,
        QualificationRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FooterModule,
        MatTableModule,
        MatButtonModule,
        MatSnackBarModule,
        ShowErrorModule,
        MatDialogModule,
        commonTableModule,
        ForDirectiveModule,
        ListingModule,
        InputSearchModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class QualificationModule { }
