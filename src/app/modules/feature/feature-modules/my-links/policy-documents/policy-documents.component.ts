import { Component, OnInit } from '@angular/core';
import {  POLICY_DOCUMENTS } from 'src/app/interfaces/interface';

export interface PeriodicElement {
  name: string;
  type: string;
  filesize: string;
  lastModified:string;
  action: string;
  srNo: string;


}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Name', type: 'pdf',filesize:'file size',lastModified:'lastModified', action:'action', srNo:'#'},
];


@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {

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
      columnDef: 'name',
      header:'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'type',
      header: 'type',
      cell: (element: Record<string, any>) => `${element['type']}`,
    },
    {
      columnDef: 'file_size',
      header: 'file_size',
      cell: (element: Record<string, any>) => `${element['file_size']}`,
    },
    {
      columnDef: 'last_Modified',
      header: 'Last_Modified ',
      cell: (element: Record<string, any>) => `${element['last_Modified']}`,
    },
    {
      columnDef: 'action',
      header: 'action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },

  ];

  tableData: Array<POLICY_DOCUMENTS> = [
    {
      s_no: '1',
      name: 'Appinventiv_Policy_Manual',
      type: 'pdf',
      file_size: '347.1 KB',
      last_Modified: 'May-13-2022',
      action: 'Download',

    },
  ];

}
