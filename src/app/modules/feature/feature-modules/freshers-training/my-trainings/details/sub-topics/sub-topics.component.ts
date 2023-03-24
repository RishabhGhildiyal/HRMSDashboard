import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { SUB_TOPICS } from 'src/app/interfaces/interface';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './sub-topics.modal';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {

  constructor() {}

  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any> = [
    {
      sub_topic: 'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',
      topic: '	Introduction',
      topic_trainer: 'Sandeep Gupta',
      trainer_email: 'sandeep.gupta@appinventiv.com',
      start_date:'FEB-28-2022',
      end_date:'FEB-28-2022',
      resource_url:'-'
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

  // downloadFile(row:any){
  //   console.log(row,"123");

  // }

}
