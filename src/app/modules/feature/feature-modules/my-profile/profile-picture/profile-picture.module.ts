import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePictureRoutingModule } from './profile-picture-routing.module';
import { ProfilePictureComponent } from './profile-picture.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ProfilePictureRoutingModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class ProfilePictureModule { }
