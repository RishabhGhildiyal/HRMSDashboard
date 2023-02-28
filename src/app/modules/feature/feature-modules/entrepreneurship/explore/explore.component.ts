import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/add-pitch']);
  }
}
