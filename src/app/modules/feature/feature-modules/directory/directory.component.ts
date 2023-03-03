import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  keyupData:any;
  showList:any;
  filter:any;
  reset:string='';
  departmentSearch:any = 'All';
  constructor() { }

  ngOnInit(): void {
    this.showList = this.membersList;
  }

  searchValue = new FormControl();
  departments =[
    {department:'All'},{department:'Angular'},{department:'Android'}, {department:'React'}, {department:'IOS'}, {department:'Flutter'}]
  // data=['Aahan Verma','Abhishek Kumar','Abhishek Shukla','Bhavya Goel','Bikramjeet Singh','Deepak Sindhu','Deepak Pokhriyal','Harsh Kukreti','Harshit Pathak']

  membersList = [

      {name:'Aahan Verma',position:'Sr. Software Engineer - angular',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Abhishek Kumar',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Abhishek Shukla',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Bhavya Goel',position:'Sr. Software Engineer - ios',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Bikramjeet Singh',position:'Sr. Software Engineer - angular',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Deepak Sindhu',position:'Sr. Software Engineer - flutter',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Deepak Pokhriyal',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Harsh Kukreti',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Harshit Pathak',position:'Sr. Software Engineer - react',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Hritik Bhandari',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'ISHIKA CHAUHAN',position:'Sr. Software Engineer - android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    ]
    filteredData: any[] = this.membersList;

    filterDataHandler(filterData:any){
      console.log("this is filter data...",filterData);
    this.filter = filterData;

  }

  clickSearch(){
    this.showList = this.filter;
  }

  clickReset(){
    this.reset = '';
    console.log("reset");


  }


  keyfunc(event:any){
    this.keyupData = event.target.value;
    if(this.keyupData.length == 0){
      this.membersList= this.membersList;
    }
  }
  search() {
    console.log(this.filteredData, 'kkkllnfdknk');
    if (this.searchValue.value) {
      this.filteredData = this.membersList.filter((item) => {
        if (
          item.name.toLowerCase().includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    } else {
      this.filteredData = this.membersList;
    }

    if (this.departmentSearch !== 'All' && this.searchValue.value ) {

      console.log('andr');
      this.filteredData = this.membersList.filter((item) => {
        if (item.position.toLowerCase().includes(this.departmentSearch.toLowerCase()) && item.name.toLowerCase().includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
  }

  departmentSelect(e: any) {
    console.log(e.value, 'kkkk');
    this.departmentSearch = e.value;
    if (this.departmentSearch) {
      const search = this.departmentSearch.toLowerCase();
      console.log(search);
      this.filteredData = this.membersList.filter((item) => {
        const department = item.position.toLowerCase();

        if (department.includes(search)) {
          return true;
        }
        return false;
      });
    }
    // this.search();
  }
}
