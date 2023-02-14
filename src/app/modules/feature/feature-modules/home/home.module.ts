import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { LatestGalleryComponent } from './home-parts/latest-gallery/latest-gallery.component';
import { latestAppinventivModule } from './home-parts/latest-appinventiv/latest-appinventiv.module';
import { latestJobsModule } from './home-parts/latest-jobs/latest-jobs.module';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
    HomeComponent,


    LatestGalleryComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    FooterModule,
    ...MATERIAL,
   latestAppinventivModule,
   latestJobsModule
  ]
})
export class HomeModule { }
