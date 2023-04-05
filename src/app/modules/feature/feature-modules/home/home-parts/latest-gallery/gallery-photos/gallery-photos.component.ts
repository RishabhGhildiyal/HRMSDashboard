import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-gallery-photos',
  templateUrl: './gallery-photos.component.html',
  styleUrls: ['./gallery-photos.component.scss'],
})
export class GalleryPhotosComponent implements OnInit {
  buttonShow: boolean = true;
  dataSource: any = [];
  slide: boolean[] = [];
  listOfNewFamilyMembers = [1, 2, 3];

  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  constructor(
    private dialogRef: MatDialogRef<GalleryPhotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'rishabh');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listToShow.forEach((item: any) => {
        this.dataSource.push(item);
      });
    }, 500);
  }
  carouselConfigGallery: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    // gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
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
  crossClick() {
    this.dialogRef.close('cancel');
  }

  // @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
}
