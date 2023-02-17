import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss']
})
export class LatestAppinventivComponent implements OnInit {

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

}
