import { Component, OnInit } from '@angular/core';

interface training {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-request-training-dialog',
  templateUrl: './request-training-dialog.component.html',
  styleUrls: ['./request-training-dialog.component.scss']
})
export class RequestTrainingDialogComponent implements OnInit {

  trainings: training[] = [
    {value: 'Microfrontend Angular', viewValue: 'Microfrontend Angular'},
  ];
  departments =[
    {department:'All'},{department:'Angular'},{department:'Android'}, {department:'React'}, {department:'IOS'}, {department:'Flutter'}]
  constructor() { }

  ngOnInit(): void {
  }
  // departmentSelect(e: any) {
  //   console.log(e.value, 'kkkk');
  //   this.departmentSearch = e.value;
  //   if (this.departmentSearch) {
  //     const search = this.departmentSearch.toLowerCase();
  //     console.log(search);
  //     this.filteredData = this.membersList.filter((item) => {
  //       const department = item.position.toLowerCase();

  //       if (department.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   // this.search();
  // }
}
