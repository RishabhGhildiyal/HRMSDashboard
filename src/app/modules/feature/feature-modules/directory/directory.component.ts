import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { membersList } from './directory-const';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  keyupData: any;
  showList: any;
  filter: any;
  reset: string = '';
  departmentSearch: any = 'All';
  listItem = membersList;
  constructor() {}

  ngOnInit(): void {
    this.showList = this.listItem;
  }

  searchValue = new FormControl();
  departments = [
    { department: 'All' },
    { department: 'Angular' },
    { department: 'Android' },
    { department: 'React' },
    { department: 'IOS' },
    { department: 'Flutter' },
  ];
  // data=['Aahan Verma','Abhishek Kumar','Abhishek Shukla','Bhavya Goel','Bikramjeet Singh','Deepak Sindhu','Deepak Pokhriyal','Harsh Kukreti','Harshit Pathak']

  filteredData: any[] = this.listItem;

  filterDataHandler(filterData: any) {
    console.log('this is filter data...', filterData);
    this.filter = filterData;
  }

  clickSearch() {
    this.showList = this.filter;
  }

  clickReset() {
    this.departmentSearch = 'All';
    this.searchValue.setValue('');
    this.search();
  }

  keyfunc(event: any) {
    this.keyupData = event.target.value;
    if (this.keyupData.length == 0) {
      this.listItem = this.listItem;
    }
  }
  search() {
    console.log(this.filteredData, 'kkkllnfdknk');
    if (this.searchValue.value) {
      this.filteredData = this.listItem.filter((item: any) => {
        if (
          item.name
            .toLowerCase()
            .includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    } else {
      this.filteredData = this.listItem;
    }

    if (this.departmentSearch !== 'All' && this.searchValue.value) {
      console.log('andr');
      this.filteredData = this.listItem.filter((item: any) => {
        if (
          item.position
            .toLowerCase()
            .includes(this.departmentSearch.toLowerCase()) &&
          item.name
            .toLowerCase()
            .includes(this.searchValue.value.trim().toLowerCase())
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
      this.filteredData = this.listItem.filter((item: any) => {
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
