import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { SquadDialogComponent } from './squad-dialog/squad-dialog.component';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss'],
})
export class LatestAppinventivComponent implements OnInit {
  slide: boolean[] = [];
  // listOfNewFamilyMembers = [1, 2, 3];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  dataSource: any = [];
  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.listToShow.forEach((item: any) => {
        this.dataSource.push(item);
      });
    },500)
  }
  carouselConfigAppinventiv: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
    gridBreakpoints: { sm: 750, md: 992, lg: 1200, xl: 1200 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    point:{
      visible:true,
      hideOnSingleSlide:true
    }
  };
    config: MatDialogConfig = {
      width:'30rem',
      autoFocus: false,
      height:'65%'
  };

  openDialog(){

    this.dialog.open(SquadDialogComponent, this.config);
  }
}
