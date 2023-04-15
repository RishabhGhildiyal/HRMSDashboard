import { Component, OnInit } from '@angular/core';
import { calender } from './myPerformanceConstants';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AwardsDialogComponent } from './awards-dialog/awards-dialog.component';
// import { AwardsDialogComponent } from './awards-dialog/awards-dialog.component';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
  year: string[] = ['2022', '2023'];
  calenderYear: any = calender;
  yearSelect = '2023';
  yearToggle = true;
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

toggleYear(e:any){

  console.log(e.value);

if(e.value == '2023'){
  this.yearToggle =true;
}else{
  this.yearToggle = false
}
}

openDialog() {
  let config: MatDialogConfig = {
    width: '40rem',
  };

  this.dialog.open(AwardsDialogComponent, config);
}

}
