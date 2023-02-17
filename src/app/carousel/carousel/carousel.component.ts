import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() listToShow: any;
  @Input() buttonShow:boolean=false;



  @ViewChild('myCarousel') carousel!: NguCarousel<any>;

  wait = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.listToShow);
    setTimeout(() => {
      this.wait = true;
    }, 500);
  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 1, all: 0 },
    //  gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  ngAfterViewInit() {

    this.cdr.detectChanges();
    console.log(this.listToShow);

  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ckk(){
    console.log(this.myCarousel);

  }
}