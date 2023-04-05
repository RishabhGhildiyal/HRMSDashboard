import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';


@NgModule({
    declarations: [
        TicketsComponent
    ],
    imports: [
        CommonModule,
        TicketsRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        FooterModule,
        commonTableModule,
        AngularEditorModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        InputSearchModule
    ]
})
export class TicketsModule { }
