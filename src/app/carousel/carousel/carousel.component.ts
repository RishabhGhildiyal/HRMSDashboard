import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() listToShow: any;
  @Input() buttonShow: boolean = false;
  @Input() carouselConfigFinal!: NguCarouselConfig;
  @Input() showList: boolean = false;

  @ViewChild('myCarousel') carousel!: NguCarousel<any>;

  wait = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // if (this.carouselConfigFinal) {
    //   this.carouselConfig = this.carouselConfigFinal;
    // }
    console.log(this.listToShow);
    console.log(this.carouselConfigFinal, 'lalalalalal');

    setTimeout(() => {
      this.wait = true;
    }, 500);
  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;


  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
      this.wait = true;
    }, 500);
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ckk() {
    console.log(this.myCarousel);
  }
}
