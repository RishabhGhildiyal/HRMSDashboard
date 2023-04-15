import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CURRENT_JOB } from 'src/app/constants/routes';
import { DialogueComponentComponent } from 'src/app/modules/feature/feature-modules/home/home-parts/dialogue-component/dialogue-component.component';
import { DialogComponentComponent } from 'src/app/modules/feature/feature-modules/my-profile/qualification/dialog-component/dialog-component.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }
  openDialog(){
    let config: MatDialogConfig = {
      width: '40rem',
      panelClass:'app-full-bleed',
      autoFocus:false
    };
    this.dialog.open(DialogueComponentComponent,config)
  }

  route(){
    this.router.navigate([CURRENT_JOB.fullurl])
  }
}
