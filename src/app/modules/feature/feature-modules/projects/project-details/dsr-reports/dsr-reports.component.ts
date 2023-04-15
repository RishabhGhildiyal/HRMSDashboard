import { Component, OnInit } from '@angular/core';
import { AM_STATUS, FINAL_STATUS, HOURS, PM_STATUS, PROJECT_DROPDOWN, RM_STATUS, STATUS_DROPDOWN, SUBMISSION_DROPDOWN } from 'src/app/constants/common-constants';

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
    list: STATUS_DROPDOWN
  };
  projectResource = {
    label: 'Project Resource',
    placeholder: 'Project Resource',
    list:PROJECT_DROPDOWN
  };

  submissionStatus = {
    label: 'Submission Status',
    placeholder: 'All',
    list: SUBMISSION_DROPDOWN
  };

  pmStatus = {
    label: 'PM Approval  Status',
    placeholder: 'All',
    list:PM_STATUS
  };
  amStatus = {
    label: 'AM Approval  Status',
    placeholder: 'All',
    list:AM_STATUS

  };
  rmStatus = {
    label: 'RM Approval  Status',
    placeholder: 'All',
    list:RM_STATUS
  };
  finalStatus = {
    label: 'Final Approval  Status',
    placeholder: 'All',
    list:FINAL_STATUS
  };
  hours = {
    label: 'Hours',
    placeholder: 'All',
    list:HOURS
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
