import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import {
  DOCUMENTS_LIST_CONFIG,
  UserTableDataSource,
} from './requested-trainings-modal';
import { Store } from '@ngrx/store';
import { myTrainingDataSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss'],
})
export class RequestedTrainingsComponent implements OnInit {
  constructor(private store: Store) {}

  listingConfig = DOCUMENTS_LIST_CONFIG;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    // this.populateTable(this.pageOptions);
    this.store.select(myTrainingDataSelector).subscribe((data: any) => {
      console.log(data, 'asdasdwadsacasdscadsd');

      this.docsData = data;
      console.log(this.docsData,"al PAcino")
    });
    this.populateTable(this.pageOptions);
  }

  docsData: Array<any> = [];
  DocsData: Array<any> = [];

  PageOption = {
    page: '1',
    limit: '10',
  };

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
        sn: beg + index + 1,
      }))
    );
    console.log(this.tableSource, '123TS');
  }

  downloadFile(row: any) {
    console.log(row, '123');
  }
  onTableEventChange(data: any) {
    this.PageOption = data;
    this.docsData = this.DOCS_DATA;

    this.populateTable(this.PageOption);
  }
  DOCS_DATA = [,];

}
