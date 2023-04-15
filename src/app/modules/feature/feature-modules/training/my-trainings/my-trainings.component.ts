import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UPCOMING_TRAININGS } from 'src/app/constants/routes';
import { RequestTrainingDialogComponent } from './request-training-dialog/request-training-dialog.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor(public dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }
  openDialog() {
    let config: MatDialogConfig = {
      width: '40rem',
      height:'95vh'
    };

    this.dialog.open(RequestTrainingDialogComponent, config);
  }
  redirect(){
    this.router.navigate([UPCOMING_TRAININGS.fullurl])
  }
}
