import { Component, OnInit } from '@angular/core';
import { SUB_TOPICS } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {

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
      columnDef: 'subTopic',
      header: 'Sub Topic',
      cell: (element: Record<string, any>) => `${element['subTopic']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'topic_trainer',
      header: 'Topic Trainer',
      cell: (element: Record<string, any>) => `${element['topic_trainer']}`,
    },
    {
      columnDef: 'trainer_email',
      header: 'Trainer Email',
      cell: (element: Record<string, any>) => `${element['trainer_email']}`,
    },
    {
      columnDef: 'startDate',
      header: 'Start Date ',
      cell: (element: Record<string, any>) => `${element['startDate']}`,
    },
    {
      columnDef: 'endDate',
      header: 'End Date',
      cell: (element: Record<string, any>) => `${element['endDate']}`,
    },
    {
      columnDef: 'resource_url',
      header: 'Resource Url',
      cell: (element: Record<string, any>) => `${element['resource_url']}`,
    },
  ];

  tableData: Array<SUB_TOPICS> = [
    {
      s_no: '1',
      subTopic:'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',
      topic: 'Introduction',
      topic_trainer: 'Sandeep Gupta',
      trainer_email: 'sandeep.gupta@appinventiv.com',
      startDate: 'FEB-28-2022',
      endDate: 'FEB-28-2022',
      resource_url: '-',
    },
  ];

}
