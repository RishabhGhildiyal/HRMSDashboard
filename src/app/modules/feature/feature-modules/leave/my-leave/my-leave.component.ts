import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './my-leave.modal';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  isShow=false;

  leaves: any = [
    { department: 'All' },
    { department: 'Angular' },
    { department: 'Android' },
    { department: 'React' },
    { department: 'IOS' },
    { department: 'Flutter' },
  ];
  numbers = new FormControl('');

  numberList: number[] = [10, 20, 30, 40];

  constructor() { }
  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any> = [
    {
      action: '',
      leave_type: '	Planned Leave(CL)',
      request_from: '2022-02-03',
      request_to: '2022-02-03',
      applied_on: '2022-24-02',
      status: 'Pending',
      level_1: 'Suyash Saxena(AI057)',
      level_2: 'HR (Human Resources)',

    },
  ];
  listingConfig = DOCUMENTS_LIST_CONFIG ;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){
    this.listingConfig.total = this.docsData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.docsData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    );
    console.log(this.tableSource,"123TS");

  }
  toggleAddNew(){
    this.isShow = !this.isShow;
  }

}
