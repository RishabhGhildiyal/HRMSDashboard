import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
// import { CarouselComponent } from './carousel/carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CommonTableComponent } from './modules/common/common-table/common-table.component';
import { StoreModule } from '@ngrx/store';
// import { PaginatorStyleDirective } from './directives/paginator-style.directive';
// import { AbsolutePathPipe } from './pipes/absolute-path.pipe';
// import { JobCardComponent } from './components/job-card/job-card.component';
// import { AppendImagePathPipe } from './pipes/image-pipe/append-image-path.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // PaginatorStyleDirective,
    // AbsolutePathPipe,
    // JobCardComponent,
    // AppendImagePathPipe,
    // CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    NguCarouselModule,
    StoreModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
