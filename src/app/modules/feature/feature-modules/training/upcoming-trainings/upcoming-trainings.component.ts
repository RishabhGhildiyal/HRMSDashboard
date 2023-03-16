import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpcomingTrainingCardComponent } from './upcoming-training-card/upcoming-training-card.component';

@Component({
  selector: 'app-upcoming-trainings',
  templateUrl: './upcoming-trainings.component.html',
  styleUrls: ['./upcoming-trainings.component.scss']
})
export class UpcomingTrainingsComponent implements OnInit {
  // divs:any = [1];
  constructor() { }

  ngOnInit(): void {
  }

}
