import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DEPARTMENT, PAGE_OPTIONS, PRIORITY } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './tickets.model';
import { DropDownAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations:[DropDownAnimation]
})
export class TicketsComponent implements OnInit {
  isShow = false;
  ticketsForm:FormGroup
  constructor(private _fb: FormBuilder) {
    this.ticketsForm = this.createForm();
   }
  // @ViewChild() abc!:HTMLElement;
  createForm() {
    return this._fb.group({
      subject:['',[Validators.required]],
      department:['',[Validators.required]],
      priority:['',[Validators.required]]
    });
  }
  docsData: Array<any> = [
    {
      name: '',
      type: '	',
      file_size: '',
      last_modified: '',
      department_name:'',
      email:'',
      mobile_no:'',
      round_type:'',
      interview_date:'',
      interview_time:'',
      final_status:'',
      action:''
    },
  ];
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
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
      displayRow.map((item: any, index:number) => ({ ...item, sn: '' }))
    );
    console.log(this.tableSource,"123TS");

  }

  toggleAddNew(){
    this.isShow = !this.isShow;
  }
  onSave(){
    this.ticketsForm.markAllAsTouched()
  }

  departmentData ={
    label: 'Department',
    placeholder:'department',
    list: DEPARTMENT
  }
  priorityData ={
    label: 'priority',
    placeholder:'priority',
    list: PRIORITY
  }

}
