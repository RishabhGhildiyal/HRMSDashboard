import { Component, OnInit } from '@angular/core';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-current-job',
  templateUrl: './current-job.component.html',
  styleUrls: ['./current-job.component.scss']
})
export class CurrentJobComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    let config: MatDialogConfig = {
      width:"30rem"
    };
    this.dialog.open(TermsDialogComponent,config)
  }

}
