import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    QualificationComponent,

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
    ShowErrorModule

  ]
})
export class QualificationModule { }
