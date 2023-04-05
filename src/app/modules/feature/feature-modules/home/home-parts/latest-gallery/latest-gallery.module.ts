import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';


import { CarouselModule } from 'src/app/carousel/carousel/carousel.module';
import { LatestGalleryComponent } from './latest-gallery.component';
import { AppendImagePathModule } from 'src/app/pipes/image-pipe/append-image-path.module';
import { GalleryPhotosComponent } from './gallery-photos/gallery-photos.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestGalleryComponent,
   GalleryPhotosComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    CarouselModule,
    AppendImagePathModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    LatestGalleryComponent
  ]
})
export class latestGalleryModule { }
