import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SideNavComponent } from './feature-parts/side-nav/side-nav.component';
import { HeaderComponent } from './feature-parts/header/header.component';



@NgModule({
  declarations: [
    FeatureComponent,
    SideNavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class FeatureModule { }
