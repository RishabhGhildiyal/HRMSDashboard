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
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss'],
})
export class RightSideComponent implements OnInit {
  slide: boolean[] = [];
  listOfNewFamilyMembers = [1, 2, 3];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  dataSource: any = [];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }
  carouselConfigJobs: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 1, xl: 1, all: 0 },
    gridBreakpoints: { sm: 600, md: 600, lg: 1200, xl: 1400 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
}
