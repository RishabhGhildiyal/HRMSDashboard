import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { GalleryPhotosComponent } from './gallery-photos/gallery-photos.component';

@Component({
  selector: 'app-latest-gallery',
  templateUrl: './latest-gallery.component.html',
  styleUrls: ['./latest-gallery.component.scss'],
})
export class LatestGalleryComponent implements OnInit {
  listOfNewFamilyMembers = [1, 2];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  dataSource: any = [];
  constructor(public dialog: MatDialog) {}

  images = [
    {image : 'https://dashboard.appinventiv.com/uploads/gallery/award_1649320793321.jpg'},
    {image: 'https://dashboard.appinventiv.com/uploads/gallery/award_1672378171227.jpg'},
    {image:'https://dashboard.appinventiv.com/uploads/gallery/award_1672292016846.jpg'}
  ]

  ngOnInit(): void {}
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
      hideOnSingleSlide: true
    }
    };
  openDialog() {
    const dialogRef = this.dialog.open(GalleryPhotosComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  slide: boolean[] = [];
}
