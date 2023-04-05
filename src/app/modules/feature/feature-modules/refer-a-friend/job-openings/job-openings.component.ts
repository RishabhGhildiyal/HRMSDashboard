import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {
  divs:any = [1,2,3,4];
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
