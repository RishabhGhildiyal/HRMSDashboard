import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestDinnerRoutingModule } from './request-dinner-routing.module';
import { RequestDinnerComponent } from './request-dinner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { InputSearchModule } from 'src/app/modules/common/input-search/input-search.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    RequestDinnerComponent
  ],
  imports: [
    CommonModule,
    RequestDinnerRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    InputSearchModule,
    MatFormFieldModule,
    CouponLegendModule,
    MatCheckboxModule,
    MatMenuModule
  ]
})
export class RequestDinnerModule { }
