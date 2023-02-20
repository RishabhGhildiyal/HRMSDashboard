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
import { MatDialog } from '@angular/material/dialog';
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
      this.dialog.open(DialogueComponentComponent)
    }
}
