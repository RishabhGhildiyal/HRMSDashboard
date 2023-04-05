import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentsRoutingModule } from './policy-documents-routing.module';
import { PolicyDocumentsComponent } from './policy-documents.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PolicyDocumentsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    commonTableModule,
    ForDirectiveModule,
    MatButtonModule
  ]
})
export class PolicyDocumentsModule { }
