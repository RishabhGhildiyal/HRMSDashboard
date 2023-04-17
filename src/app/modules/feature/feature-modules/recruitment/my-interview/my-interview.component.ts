import { Component, OnInit } from '@angular/core';
import { INTERVIEW_DATA, PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './my-interview.modal';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss'],
})
export class MyInterviewComponent implements OnInit {
  departments: any = [
    { department: 'All' },
    { department: 'Angular' },
    { department: 'Android' },
    { department: 'React' },
    { department: 'IOS' },
    { department: 'Flutter' },
  ];
  statuses: any = [
    { status: 'Select Status' },
    { status: 'Selected' },
    { status: 'Rejected' },
    { status: 'Missed' },
    { status: 'In Progess' },
  ];
  constructor() { }
  // @ViewChild() abc!:HTMLElement;
  interviewData: Array<any> = INTERVIEW_DATA;

  listingConfig = DOCUMENTS_LIST_CONFIG ;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){

    if(pageOptions.hasOwnProperty('search')){
      this.interviewData = this.interviewData.filter((item:any)=>{
        if(
          (item.name.toLowerCase()).includes(pageOptions.search.toLowerCase()) ||
          (item.email.toLowerCase()).includes(pageOptions.search.toLowerCase())
        ){  //for custom search on individual fields
          return item;
        }
      })
    }

    this.listingConfig.total = this.interviewData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.interviewData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index +1 }))
    );
    console.log(this.tableSource,"123TS");

  }

  onTableEventChange(data:any){
    this.pageOptions = data;
    this.interviewData = INTERVIEW_DATA;
    console.log(this.pageOptions,"PIP")
    this.populateTable(this.pageOptions);
  }

  // downloadFile(row:any){
  //   console.log(row,"123");

  // }
}
