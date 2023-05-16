import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpcomingTrainingCardComponent } from '../upcoming-training-card/upcoming-training-card.component';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let config: MatDialogConfig = {
      width: '40rem',
      panelClass:'app-full-bleed',
      autoFocus:false
    };
    this.dialog.open(UpcomingTrainingCardComponent,config)
  }

}
