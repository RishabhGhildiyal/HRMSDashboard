import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DETAILS } from 'src/app/constants/routes';
import { DialogueComponentComponent } from '../../home/home-parts/dialogue-component/dialogue-component.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss'],
})
export class MyTrainingsComponent implements OnInit {
  divs: any = [1, 2];
  constructor(public dialog: MatDialog, private router:Router) {}

  ngOnInit(): void {}
  openDialog() {
    let config: MatDialogConfig = {
      minWidth: '40rem',
    };

    this.dialog.open(FeedbackDialogComponent, config);
  }
  details(){
    this.router.navigate([DETAILS.fullurl])
  }
}
