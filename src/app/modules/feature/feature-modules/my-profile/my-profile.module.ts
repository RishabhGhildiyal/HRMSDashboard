import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [CommonModule, MyProfileRoutingModule, MatTabsModule, MatIconModule],
})
export class MyProfileModule {}
