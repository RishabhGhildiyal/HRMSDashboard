import { Component, OnInit } from '@angular/core';
import { ALLOCATION_DROPDOWN, ASSETS_DROPDOWN, PAGE_OPTIONS, PRIORITY_DROPDOWN, QUANTITY_DROPDOWN } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './request-asset.modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss']
})
export class RequestAssetComponent implements OnInit {
  assetForm!: FormGroup
  toggleAddNew(){
    this.isShow = !this.isShow;
  }

  isShow = false

  constructor(private fb:FormBuilder) {

  }
  // @ViewChild() abc!:HTMLElement;

  docsData: Array<any> = [
    {
      name:'',
      status: '',
      request_reason: '	',
      priority: '',
      requested_at: '',
      assets_category: '',
      allocation_type: '',
      company: '',

    },
  ];
  listingConfig = DOCUMENTS_LIST_CONFIG ;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
    this.assetForm = this.fb.group({
      assetCategory: ['', [Validators.required]],
      quantity: ['',[Validators.required]],
      priority:['',[Validators.required]],
      requiredByDate:['',Validators.required],
      allocationType:['',Validators.required],
      requestReason:['',Validators.required]
    })
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

  assetsDropdownData = {
    label: 'Project',
    placeholder: 'Assets Quantity',
    list: ASSETS_DROPDOWN,
  };

  quantityDropdownData = {
    label: 'Project',
    placeholder: 'Project',
    list: QUANTITY_DROPDOWN,
  };

  priorityDropdownData ={
    label: 'Project',
    placeholder: 'Priority',
    list: PRIORITY_DROPDOWN,
  }
  allocationDropdownData ={
    label: 'Project',
    placeholder: 'Allocation Type',
    list: ALLOCATION_DROPDOWN,
  }

  toggleButton(){
    this.isShow = !this.isShow;
  }
}


