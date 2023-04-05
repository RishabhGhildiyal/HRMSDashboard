import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSearchRoutingModule } from './input-search-routing.module';
import { InputSearchComponent } from './input-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    InputSearchRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    
  ],
  exports:[
    InputSearchComponent
  ]
})
export class InputSearchModule { }
