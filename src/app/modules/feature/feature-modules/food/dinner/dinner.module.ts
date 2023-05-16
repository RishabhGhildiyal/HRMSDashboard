import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRoutingModule } from './dinner-routing.module';
import { DinnerComponent } from './dinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import { MatButtonModule } from '@angular/material/button';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';


@NgModule({
  declarations: [
    DinnerComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    MatInputModule,
    HttpClientModule,
    ShowErrorModule,
    MatButtonModule,
    InputSearchModule
  ]
})
export class DinnerModule { }
