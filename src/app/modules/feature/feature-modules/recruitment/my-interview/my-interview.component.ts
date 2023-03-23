import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss'],
})
export class MyInterviewComponent implements OnInit {
  departments: any = [
    { department: 'All' },
    { department: 'Angular' },
    { department: 'Android' },
    { department: 'React' },
    { department: 'IOS' },
    { department: 'Flutter' },
  ];
  statuses: any = [
    { status: 'Select Status' },
    { status: 'Selected' },
    { status: 'Rejected' },
    { status: 'Missed' },
    { status: 'In Progess' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
