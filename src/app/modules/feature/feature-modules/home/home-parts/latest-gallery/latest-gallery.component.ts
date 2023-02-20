import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-latest-gallery',
  templateUrl: './latest-gallery.component.html',
  styleUrls: ['./latest-gallery.component.scss']
})
export class LatestGalleryComponent implements OnInit {

  slide:boolean[]=[];
  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
      this.listToShow.forEach((item:any)=>{
        this.dataSource.push(item);
      })
    }
    carouselConfigGallery: NguCarouselConfig = {
      grid: { xs: 1, sm: 1, md: 2, lg: 1, all: 0 },
       gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
      load: 1,
      interval: { timing: 4000, initialDelay: 1000 },
      loop: true,
      touch: true,
      velocity: 0.2,
    };

}
