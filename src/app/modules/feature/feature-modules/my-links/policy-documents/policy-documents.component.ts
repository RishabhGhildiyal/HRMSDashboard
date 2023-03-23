import { Component, OnInit, ViewChild } from '@angular/core';
import { PAGE_OPTIONS, PAGE_SIZE_OPTIONS } from 'src/app/constants/common-constants';
import {  POLICY_DOCUMENTS } from 'src/app/interfaces/interface';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './policy-documents-model';
@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {

  constructor() { }
  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any> = [
    {
      name: ' Appinventiv_Policy_Manual',
      type: '	pdf',
      file_size: '341.71 KB',
      last_modified: 'May-13-2022',
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

  downloadFile(row:any){
    console.log(row,"123");

  }

}
