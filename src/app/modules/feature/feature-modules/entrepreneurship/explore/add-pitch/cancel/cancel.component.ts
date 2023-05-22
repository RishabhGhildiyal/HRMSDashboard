import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './cancel.model';
import { Store } from '@ngrx/store';
import { myPitchDataSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss'],
})
export class CancelComponent implements OnInit {
  constructor(private store: Store) {}
  // @ViewChild() abc!:HTMLElement;

  docsData: Array<any> = [];
  listingConfig = DOCUMENTS_LIST_CONFIG;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.store.select(myPitchDataSelector).subscribe((data: any) => {
      console.log(data, 'daaa');
      this.docsData = data;
      console.log(this.tableSource, 'nannnnnnnnnnnn');
    });
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions: any) {
    this.listingConfig.total = this.docsData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit;

    let displayRow = [];
    for (let i = beg; i < end && i < this.listingConfig.total; i++) {
      displayRow.push(this.docsData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index: number) => ({
        ...item,
        sn: index + 1,
      }))
    );
    console.log(this.tableSource, 'otla');
  }
  onTableEventChange(data: any) {
    this.pageOptions = data;
    console.log(data, '9887');
    this.docsData = this.DOCS_DATA;
    this.populateTable(this.pageOptions);
  }

  DOCS_DATA = [,];

  // downloadFile(row:any){
  //   console.log(row,"123");

  // }
}
