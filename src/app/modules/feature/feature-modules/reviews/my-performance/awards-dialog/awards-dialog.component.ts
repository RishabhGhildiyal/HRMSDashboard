import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards-dialog',
  templateUrl: './awards-dialog.component.html',
  styleUrls: ['./awards-dialog.component.scss']
})
export class AwardsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardData =[
    { title:'Team Work',rating:'3.0'},
    {title:'Team Work',rating:'3.5'},
    {title:'Team Work',rating:'4.0'},
    {title:'Team Work',rating:'4.0'}
   ];

}
