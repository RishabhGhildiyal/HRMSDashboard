import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './my-assets-inventory.modal';


@Component({
  selector: 'app-my-assets-inventory',
  templateUrl: './my-assets-inventory.component.html',
  styleUrls: ['./my-assets-inventory.component.scss']
})
export class MyAssetsInventoryComponent implements OnInit {


  constructor() { }
  // @ViewChild() abc!:HTMLElement;
  docsData: Array<any> = [
    {
      asset_name: 'LAPTOP',
      assets_category: '	Laptop',
      company_asset_code: 'L4320',
      brand: 'HP',
      serial_no: 'SCLR9878654',
      model: 'ZBOOK',
      is_working: 'Yes',
      company: 'Appinventiv Technology',

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

}
