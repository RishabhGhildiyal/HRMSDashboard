import { Component, OnInit } from '@angular/core';
import { ASSETS_DECLARATION, DEVICE_WORKING, OS_VERSION, PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './asset-declaration.modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss']
})
export class AssetDeclarationComponent implements OnInit {
  isShow=false;
  assetsForm!:FormGroup;
  // os_type = new FormControl();
  // device = new FormControl();
  constructor(private _fb:FormBuilder) {
    this.assetsForm = this.createForm();
  }
  // @ViewChild() abc!:HTMLElement;

  DOCS_DATA: Array<any> = [
    {
      sno:'1',
      employee_id:'AI1568',
      unique_asset_code:'LKRM25',
      serial_number:'3281974',
      model_number:'98755783986',
      os:'16',
      os_version:'16.2',
      brand:'Apple',
      colour:'red',
      images:'yes',
      is_working:'yes',
      added:'yes'
    },

  ];
  docsData:Array<any> = ASSETS_DECLARATION;


  listingConfig = DOCUMENTS_LIST_CONFIG ;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }
  createForm(){

    return this._fb.group({
      employee_id: ['', Validators.required],
      unique_asset_code: ['', Validators.required],
      serial_number: ['', Validators.required],
      model_number: ['', Validators.required],
      os_version: ['', Validators.required],
      brand: ['', Validators.required],
      colour: ['', Validators.required],
      is_working:['',Validators.required],
     os:['',[Validators.required]],

    });
  }

  interviewData: Array<any> = ASSETS_DECLARATION;


  populateTable(pageOptions:any){
    if(pageOptions.hasOwnProperty('search')){
      this.docsData = this.docsData.filter((item:any)=>{
        if(
          (item.brand.toLowerCase()).includes(pageOptions.search.toLowerCase()) ||
          (item.unique_asset_code.toLowerCase()).includes(pageOptions.search.toLowerCase())

        ){  //for custom search on individual fields
          console.log(item.education_level,"aliii");

          return item;
        }
      })
    }
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
  toggleAddNew(){
    this.isShow = !this.isShow;
  }
  onTableEventChange(data: any) {
    this.pageOptions = data;
    console.log(data, '9887');
    this.docsData = ASSETS_DECLARATION;
    this.populateTable(this.pageOptions);
  }

  onSubmit(){
    if(this.assetsForm.valid){
      console.log("12345");

      this.assetsForm.value['added'] = 'yes';
      this.assetsForm.value['images'] = 'yes';


      this.tableSource.data.push(this.assetsForm.value);
      this.docsData.push(this.assetsForm.value);
      this.populateTable(this.pageOptions);
    }
    else{
      console.log("kuch nhiii");

      this.assetsForm.markAllAsTouched()
    }
   }
  os ={
    label: 'OS Version',
    placeholder:'OS Version',
    list: OS_VERSION
  }

  device_working ={
    label: 'device_working',
    placeholder:'Device Working',
    list: DEVICE_WORKING
  }
}
