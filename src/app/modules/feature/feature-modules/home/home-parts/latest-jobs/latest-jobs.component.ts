import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.scss'],
})
export class LatestJobsComponent implements OnInit, AfterViewInit {
  slide:boolean[]=[];
  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
    constructor(public dialog:MatDialog) { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
      this.listToShow.forEach((item:any)=>{
        this.dataSource.push(item);
      })
    }

    openDialog(){
      let config: MatDialogConfig = {
        width:"100rem"
      };
      this.dialog.open(DialogueComponentComponent,config)

    }
    carouselConfigJobs: NguCarouselConfig = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
       gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
      load: 1,
      interval: { timing: 4000, initialDelay: 1000 },
      loop: true,
      touch: true,
      velocity: 0.2,
    };
}
