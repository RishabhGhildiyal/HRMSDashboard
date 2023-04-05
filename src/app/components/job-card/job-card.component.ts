import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponentComponent } from 'src/app/modules/feature/feature-modules/home/home-parts/dialogue-component/dialogue-component.component';
import { DialogComponentComponent } from 'src/app/modules/feature/feature-modules/my-profile/qualification/dialog-component/dialog-component.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogueComponentComponent)
  }
}
