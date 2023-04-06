import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsr-reports',
  templateUrl: './dsr-reports.component.html',
  styleUrls: ['./dsr-reports.component.scss']
})
export class DsrReportsComponent implements OnInit {
  constructor() {}
  statusData = {
    label: 'Department',
    placeholder: 'All',
    options: ['Angular', 'Android', 'Node', 'ios', 'Blockchain'],
  };
  projectResource = {
    label: 'Project Resource',
    placeholder: 'Project Resource',
    options: ['Nandini Rohatgi', 'Ananya Srivastava'],
  };

  submissionStatus = {
    label: 'Submission Status',
    placeholder: 'All',
    options: ['Submitted', 'Due'],
  };

  pmStatus = {
    label: 'PM Approval  Status',
    placeholder: 'All',
    options: ['Pending', 'Approved', 'Rejected'],
  };
  amStatus = {
    label: 'AM Approval  Status',
    placeholder: 'All',
    options: ['Pending', 'Approved', 'Rejected'],

  };
  rmStatus = {
    label: 'RM Approval  Status',
    placeholder: 'All',
    options: ['Pending', 'Approved', 'Rejected'],

  };
  finalStatus = {
    label: 'Final Approval  Status',
    placeholder: 'All',
    options: ['Pending', 'Approved', 'Rejected'],

  };
  hours = {
    label: 'Hours',
    placeholder: 'All',
    options: [
     'Less than 5 hours' ,
     'Greater than 5 hours' ,
     'Greater than 8 hours' ,
    ],
  };
  ngOnInit(): void {}
  listItems = [
    { Title: 'Total DSR Submitted' },
    { Title: 'Total DSR DUE' },
    { Title: 'Total DSR Pending Apporval' },
    { Title: 'Total DSR Approved' },
    { Title: 'Total DSR Rejected' },
    { Title: 'Pending AM Approval' },
    { Title: 'Pending PM Approvals' },
    { Title: 'Pending RM Approvals' },
  ];

}
