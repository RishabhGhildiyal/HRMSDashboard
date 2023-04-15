import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CovidDialogComponent } from './covid-dialog/covid-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowErrorModule } from "../../../../pipes/showErrorPipe/show-error.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [FooterComponent, CovidDialogComponent],
    exports: [FooterComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ShowErrorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class FooterModule { }
