import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  dateOfJoining: string;
  officeShift: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {officeShift: 'Morning Shift', dateOfJoining: 'Feb-07-2022',},
];

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  displayedColumns: string[] = ['dateOfJoining', 'OfficeShift'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
