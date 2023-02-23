import { Component, OnInit } from '@angular/core';

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

  displayedColumns: string[] = ['srNo','name', 'type','filesize','lastModified','action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
