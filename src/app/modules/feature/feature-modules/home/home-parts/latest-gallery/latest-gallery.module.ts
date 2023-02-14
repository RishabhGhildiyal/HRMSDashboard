import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';

import { LatestGalleryComponent } from './latest-gallery.component';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestGalleryComponent

  ],
  imports: [
    CommonModule,
    MatCardModule

  ],
  exports: [
    LatestGalleryComponent
  ]
})
export class latestGalleryModule { }
