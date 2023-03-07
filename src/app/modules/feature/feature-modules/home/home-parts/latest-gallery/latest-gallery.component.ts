import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-latest-gallery',
  templateUrl: './latest-gallery.component.html',
  styleUrls: ['./latest-gallery.component.scss'],
})
export class LatestGalleryComponent implements OnInit {
  slide: boolean[] = [];
  image: any[] = [
    {
      url: '../../../../../../../assets/award_1660310382113.jpg',
    },
    {
      url: '../../../../../../../assets/award_1665553979253.jpg',
    },
    {
      url: '../../../../../../../assets/award_1669014343495.png',
    },
    {
      url: '../../../../../../../assets/award_1672292016846.jpg',
    },
  ];

  listOfNewFamilyMembers = [1, 2, 3, 4];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  dataSource: any = [];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listToShow.forEach((item: any) => {
        this.dataSource.push(item);
      });
    }, 500);
  }
  carouselConfigGallery: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    gridBreakpoints: { sm: 750, md: 992, lg: 1200, xl: 1200 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true,
    },
  };
  openDialog(){
    
  }
}
