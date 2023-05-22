import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { REFERRAL_LIST } from 'src/app/interfaces/interface';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './referral-list.model';


@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {

  constructor() { }
  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any>  = [
    {
      c_name: 'Parth Daga',
      experience: '2.5 Years	',
      department: 'Business Analyst',
      position: 'Sr. Business Analyst',
      date_of_referral:'2022-01-10',
      c_status:'CV Rejected',
      resume_cv:'Download',
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
      displayRow.map((item: any, index:number) => ({ ...item, sn: index+1  }))
    );
    console.log(this.tableSource,"123TS");

  }

  downloadFile(row:any){
    console.log(row,"123");

  }

}
