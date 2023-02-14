import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';

import { LatestJobsComponent } from './latest-jobs.component';
import { CarouselModule } from 'src/app/carousel/carousel/carousel.module';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestJobsComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    CarouselModule

  ],
  exports: [
    LatestJobsComponent
  ]
})
export class latestJobsModule { }
