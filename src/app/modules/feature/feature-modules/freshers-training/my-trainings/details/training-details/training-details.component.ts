import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { TRAINING_DETAILS } from 'src/app/interfaces/interface';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './training-details.modal';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent implements OnInit {
  constructor() {}

  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any> = [
    {
      // name: ' Appinventiv_Policy_Manual',
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
