import { Component, OnInit } from '@angular/core';
import { DSRDETAILS_LIST_CONFIG, dsrdetailsTableDataSource } from './dsr-details.model';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-dsr-details',
  templateUrl: './dsr-details.component.html',
  styleUrls: ['./dsr-details.component.scss']
})
export class DsrDetailsComponent implements OnInit {
  tableSource: Table.Source<any> = new dsrdetailsTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.populateTable(this.pageOptions)
  }
  pageOptions = PAGE_OPTIONS
  docsData: Array<any>  = [
    {
      project_name: 'Training Project React Js',
      dsr: 'Task 1:  Revised concept of Promise, chaining and error handling [3 hrs]',
      status: 'Submitted',
      pm_approval: 'Pending',
      am_approval:'Pending',
      rm_approval:'N/A',
      final_Approval:'Pending',
      logged_hrs:'08:00',
      action:''
    },
  ];
  listingConfig = DSRDETAILS_LIST_CONFIG ;

  populateTable(pageOptions:any){
    this.listingConfig.total = this.docsData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.docsData[i]);
    }

    this.tableSource = new dsrdetailsTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: index+1  }))
    );
    console.log(this.tableSource,"123TS");

  }
  openEdit(){

  }
}
