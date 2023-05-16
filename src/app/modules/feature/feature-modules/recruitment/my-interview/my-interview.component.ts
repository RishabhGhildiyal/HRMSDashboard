import { Component, OnInit } from '@angular/core';
import { DEPARTMENT, INTERVIEW_DATA, PAGE_OPTIONS, STATUS_DATA, STATUS_DROPDOWN } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './my-interview.modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss'],
})
export class MyInterviewComponent implements OnInit {

  interviewForm!:FormGroup;

  constructor(private fb:FormBuilder, private service:FormService) { }
  // @ViewChild() abc!:HTMLElement;

  createForm() {
    return this.fb.group({
      department: this.service.getControl('department'),
      status: this.service.getControl('education'),
    });
  }
  interviewData: Array<any> = INTERVIEW_DATA;

  listingConfig = DOCUMENTS_LIST_CONFIG ;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file
  ngOnInit(): void {
    this.interviewForm = this.createForm();
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){

    if(pageOptions.hasOwnProperty('status')){
      console.log(pageOptions,'OTT',this.interviewData)
      this.interviewData = this.interviewData.filter((item:any)=> {
        console.log(item.status,'---',pageOptions.final_status);
        if(item.final_status == pageOptions.status){

          return item;
        }
      })
    }

    if(pageOptions.hasOwnProperty('department')){
      console.log(pageOptions,'OTT',this.interviewData)
      this.interviewData = this.interviewData.filter((item:any)=> {
        console.log(item.department_name,'---',pageOptions.department);
        if(item.department_name == pageOptions.department){

          return item;
        }
      })
    }


    if(pageOptions.hasOwnProperty('search')){
      this.interviewData = this.interviewData.filter((item:any)=>{

        if(
          (item.name.toLowerCase()).includes(pageOptions.search.toLowerCase()) ||
          (item.email.toLowerCase()).includes(pageOptions.search.toLowerCase())
        ){  //for custom search on individual fields
          return item;
        }
      })
    }

    this.listingConfig.total = this.interviewData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.interviewData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index +1 }))
    );
    console.log(this.tableSource,"123TS");

  }

  onTableEventChange(data:any){
    this.pageOptions = data;
    this.interviewData = INTERVIEW_DATA;
    console.log(this.pageOptions,"")
    this.populateTable(this.pageOptions);
  }

  department_data = {

    placeholder: 'Department',
    list: STATUS_DROPDOWN,
  };

  status_data = {

    placeholder: 'Status',
    list: STATUS_DATA,
  };

  

  dropdownSelect(data:any,label:string){
      console.log(data,'vxi')
      let t:any = {}
      t[label] = data
      this.pageOptions = {...this.pageOptions, ...t};
      this.interviewData = INTERVIEW_DATA;
      this.populateTable(this.pageOptions)
  }


}
