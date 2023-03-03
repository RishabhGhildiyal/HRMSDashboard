import { Component, OnInit } from '@angular/core';
import { calender } from './myPerformanceConstants';

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
  constructor() { }

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


}
