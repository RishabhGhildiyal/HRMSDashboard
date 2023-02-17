import { trigger, transition, style, animate } from '@angular/animations';
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
  styleUrls: ['./shift.component.scss'],
  animations: [
    trigger('enterLeaveAnimation',
    [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }), //apply default styles before animation starts
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ],
)],
})
export class ShiftComponent implements OnInit {

  displayedColumns: string[] = ['dateOfJoining', 'OfficeShift'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
