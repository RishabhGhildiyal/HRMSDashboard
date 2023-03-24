import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
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
  docsData: Array<any> = [
    {
      name: '',
      type: '	',
      file_size: '',
      last_modified: '',
      department_name:'',
      email:'',
      mobile_no:'',
      round_type:'',
      interview_date:'',
      interview_time:'',
      final_status:'',
      action:''
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
      displayRow.map((item: any, index:number) => ({ ...item, sn: '' }))
    );
    console.log(this.tableSource,"123TS");

  }

  // downloadFile(row:any){
  //   console.log(row,"123");

  // }
}
