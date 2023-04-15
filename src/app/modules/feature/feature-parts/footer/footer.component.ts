import { Component, OnInit } from '@angular/core';
import { CovidDialogComponent } from './covid-dialog/covid-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    let config: MatDialogConfig = {
      width: '80rem',
      panelClass:'app-full-bleed'
    };
    this.dialog.open(CovidDialogComponent,config)
  }

}
