import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { LEAVE_CATEGORY, PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { VIEW_DETAILS } from 'src/app/constants/routes';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './my-leave.modal';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  isShow=false;
  showShortLeave = false;
  checked =false;
  leave = new FormControl();
  today = new Date();
  date = new FormControl();
  leaveForm!: FormGroup;
  leaves: any = [
    { department: 'All' },
    { department: 'Angular' },
    { department: 'Android' },
    { department: 'React' },
    { department: 'IOS' },
    { department: 'Flutter' },
  ];
  numbers = new FormControl('');

  numberList: number[] = [10, 20, 30, 40];

  constructor(private _fb:FormBuilder,private router:Router) {
    this.leaveForm = this.createForm();
  }
  // @ViewChild() abc!:HTMLElement;

  createForm() {
    return this._fb.group({
      leave_type: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      remarks: [''],
      upload:['',[Validators.required]],
      
    });
  }

  docsData: Array<any> = [
    {
      action: '',
      leave_type: '	Planned Leave(CL)',
      request_from: '2022-02-03',
      request_to: '2022-02-03',
      applied_on: '2022-24-02',
      status: 'Pending',
      level_1: 'Suyash Saxena(AI057)',
      level_2: 'HR (Human Resources)',

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
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    );
    console.log(this.tableSource,"123TS");

  }
  // toggleAddNew(){
  //   this.isShow = !this.isShow;
  // }

  leave_type ={
    label: 'Leave',
    placeholder:'Leave Type',
    list: LEAVE_CATEGORY
  }

  route(){
    this.router.navigate([VIEW_DETAILS.fullurl])
  }

  halfLeave(e:any){
    console.log(e, 'll');

    if (e.checked == true) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
  save(){
    if (this.leaveForm.valid) {
      this.tableSource.data.push(this.leaveForm.value);
      this.docsData.push(this.leaveForm.value);
      // this.populateTable(this.PageOption);
      // console.log(this.tableSource.data);
    } else {
      this.leaveForm.markAllAsTouched();
    }
  }
}
