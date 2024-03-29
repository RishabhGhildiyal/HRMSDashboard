import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { OverviewTableDataSource, OVERVIEW_LIST_CONFIG } from './overview.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tableSource: Table.Source<any> = new OverviewTableDataSource([]);

  panelOpenState = false;
  constructor() { }


  leftList = [
    {
      letter: 'R',
      Info: 'Roadmap',
    },
    {
      letter: 'P',
      Info: 'Project Plan',
    },
    {
      letter: 'U',
      Info: 'User Stories',
    },
    {
      letter: 'D',
      Info: 'Designs',
    },
  ];

  rightList = [
    {
      letter: 'S',
      Info: 'Scope of Work',
    },
    {
      letter: 'W',
      Info: 'Wireframe',
    },
    {
      letter: 'O',
      Info: 'Other',
    },
    {
      letter: 'P',
      Info: 'Project App Links',
    },
  ];

ngOnInit(): void {
  this.populateTable(this.PageOption);
}

docsData: Array<any> = [
  {
   milestones:'',
   release:'',
   description:'',
    qa_date:'',
    demo_state:'',
    release_state:'',
    delivery_status:'',
    sign_off:'',


  },
]


listingConfig = OVERVIEW_LIST_CONFIG;
PageOption = {
  page: '1',
  limit: '5',
};

populateTable(pageOptions: any) {
  this.listingConfig.total = this.docsData.length;

  let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
  let end = pageOptions.page * pageOptions.limit;
  console.log(beg,'begg');
  console.log(end,'end');
  let displayRow = [];
  for (let i = beg; i < end && i < this.listingConfig.total; i++) {
    displayRow.push(this.docsData[i]);
  }

  this.tableSource = new OverviewTableDataSource(
    displayRow.map((item: any, index: number) => ({
      ...item,
      sn: beg + index + 1,
    }))
  );



  console.log(this.tableSource.data, 'akti');
}

}
