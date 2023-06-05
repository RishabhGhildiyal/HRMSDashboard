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
import { latestGalleryModule } from './home-parts/latest-gallery/latest-gallery.module';
import { DialogueComponentComponent } from './home-parts/dialogue-component/dialogue-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import {referaCandidateReducer } from 'src/app/store/reducer';
import { refer_candidate } from 'src/app/store/selector';
import { StoreModule } from '@ngrx/store';

const MATERIAL  = [MatCardModule]

@NgModule({
  declarations: [
    HomeComponent,
    DialogueComponentComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    FooterModule,
    ...MATERIAL,
   latestAppinventivModule,
   latestJobsModule,
   latestGalleryModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    ShowErrorModule,
    StoreModule.forFeature(refer_candidate, referaCandidateReducer)
  ]
})
export class HomeModule { }
