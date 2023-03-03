import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_PITCH } from 'src/app/constants/routes';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  shareIdea(){
    this.router.navigate([ADD_PITCH.fullurl]);
  }
}
