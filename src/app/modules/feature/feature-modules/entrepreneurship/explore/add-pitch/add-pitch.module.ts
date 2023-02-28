import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPitchRoutingModule } from './add-pitch-routing.module';
import { AddPitchComponent } from './add-pitch.component';


@NgModule({
  declarations: [
    AddPitchComponent
  ],
  imports: [
    CommonModule,
    AddPitchRoutingModule
  ]
})
export class AddPitchModule { }
