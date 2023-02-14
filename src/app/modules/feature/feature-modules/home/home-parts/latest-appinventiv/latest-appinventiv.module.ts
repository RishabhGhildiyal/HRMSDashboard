import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { LatestAppinventivComponent } from './latest-appinventiv.component';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestAppinventivComponent

  ],
  imports: [
    CommonModule,
    MatCardModule

  ],
  exports: [
    LatestAppinventivComponent
  ]
})
export class latestAppinventivModule { }
