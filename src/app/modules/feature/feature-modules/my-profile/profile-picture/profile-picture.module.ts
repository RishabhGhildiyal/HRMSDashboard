import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePictureRoutingModule } from './profile-picture-routing.module';
import { ProfilePictureComponent } from './profile-picture.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ProfilePictureRoutingModule,
    MatButtonModule
  ]
})
export class ProfilePictureModule { }
