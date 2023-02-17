import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'src/app/carousel/carousel/carousel.module';
import { RightSideComponent } from './right-side.component';




const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
RightSideComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    CarouselModule

  ],
  exports: [
   RightSideComponent
  ]
})
export class RightSideModule { }
