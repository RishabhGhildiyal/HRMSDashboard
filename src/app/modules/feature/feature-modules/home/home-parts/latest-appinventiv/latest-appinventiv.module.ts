import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
// import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { LatestAppinventivComponent } from './latest-appinventiv.component';
import { CarouselModule } from 'src/app/carousel/carousel/carousel.module';
import { SquadDialogComponent } from './squad-dialog/squad-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
   LatestAppinventivComponent,
   SquadDialogComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    CarouselModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    LatestAppinventivComponent
  ]
})
export class latestAppinventivModule { }
