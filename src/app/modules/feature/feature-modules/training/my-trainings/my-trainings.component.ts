import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestTrainingDialogComponent } from './request-training-dialog/request-training-dialog.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    let config: MatDialogConfig = {
      minWidth: '40rem',
    };

    this.dialog.open(RequestTrainingDialogComponent, config);
  }
}
