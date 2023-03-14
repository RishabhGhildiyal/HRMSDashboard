import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueComponentComponent } from '../../home/home-parts/dialogue-component/dialogue-component.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss'],
})
export class MyTrainingsComponent implements OnInit {
  divs: any = [1, 2];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    let config: MatDialogConfig = {
      minWidth: '40rem',
    };

    this.dialog.open(FeedbackDialogComponent, config);
  }
}
