import { Component, OnInit } from '@angular/core';
import { ATTENDANCE } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tableColumns: Array<any> = [
    {
      columnDef: 's_no',
      header: 'S No.',
      cell: (element: Record<string, any>) => `${element['s_no']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'attendance',
      header: 'Attendance',
      cell: (element: Record<string, any>) => `${element['attendance']}`,
    }
  ];

  tableData: Array<ATTENDANCE> = [
    {
      s_no: '1',
      topic: 'Introduction',
      date: 'FEB-28-2022',
      attendance: 'Present',
    },
  ];

}
