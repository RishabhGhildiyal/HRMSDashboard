import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonTableComponent } from './common-table.component';
import { MatTableModule } from '@angular/material/table';
import { ForDirectiveModule } from '../for-directive/for-directive.module';


@NgModule({
  declarations: [
    CommonTableComponent
  ],
  exports:[CommonTableComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    ForDirectiveModule
  ]
})
export class commonTableModule { }
