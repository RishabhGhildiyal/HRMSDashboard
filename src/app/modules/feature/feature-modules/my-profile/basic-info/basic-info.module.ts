import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';

@NgModule({
  declarations: [
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ShowErrorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    InputSearchModule
  ],
})
export class BasicInfoModule { }
