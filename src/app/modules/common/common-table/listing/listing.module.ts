import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorStyleDirective } from 'src/app/directives/paginator-style.directive';



@NgModule({
  declarations: [
    ListingComponent,
    PaginatorStyleDirective
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports:[
    ListingComponent
  ]
})
export class ListingModule { }
