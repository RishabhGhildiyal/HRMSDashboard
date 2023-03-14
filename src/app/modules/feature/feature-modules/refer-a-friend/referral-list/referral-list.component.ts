import { Component, OnInit } from '@angular/core';
import { REFERRAL_LIST } from 'src/app/interfaces/interface';


@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {

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
      columnDef: 'CandidateName',
      header:'Candidate Name',
      cell: (element: Record<string, any>) => `${element['CandidateName']}`,
    },
    {
      columnDef: 'experience',
      header: 'Experience',
      cell: (element: Record<string, any>) => `${element['experience']}`,
    },
    {
      columnDef: 'department',
      header: 'Department',
      cell: (element: Record<string, any>) => `${element['department']}`,
    },
    {
      columnDef: 'position',
      header: 'Position ',
      cell: (element: Record<string, any>) => `${element['position']}`,
    },
    {
      columnDef: 'date_of_referral',
      header: 'Date of Referral',
      cell: (element: Record<string, any>) => `${element['date_of_referral']}`,
    },
    {
      columnDef: 'candidate_status',
      header: 'Candidate Status',
      cell: (element: Record<string, any>) => `${element['candidate_status']}`,
    },
    {
      columnDef: 'resume',
      header: 'Resume',
      cell: (element: Record<string, any>) => `${element['resume']}`,
    },

  ];


  tableData: Array<REFERRAL_LIST> = [
    {
      s_no: '1',
      CandidateName: 'Parth',
      experience: '2.5 Years',
      department: 'Business Analyst',
      position: 'Business Analyst',
      date_of_referral: 'Jan-10-2023',
      candidate_status:'CV Rjected',
      resume: 'download'
    },
  ];

}
