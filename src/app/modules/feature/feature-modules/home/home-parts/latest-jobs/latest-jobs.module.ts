import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';

import { LatestJobsComponent } from './latest-jobs.component';
import { CarouselModule } from 'src/app/carousel/carousel/carousel.module';
import { RightSideModule } from './right-side/right-side.module';
// import { RightSideComponent } from './right-side/right-side.component';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestJobsComponent,
  //  RightSideComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    CarouselModule,
    RightSideModule

  ],
  exports: [
    LatestJobsComponent
  ]
})
export class latestJobsModule { }
