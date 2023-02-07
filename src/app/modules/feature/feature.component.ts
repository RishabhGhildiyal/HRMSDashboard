import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  // @Output() toggleMenu = new EventEmitter()-

  isShowing:boolean = false;
  showSidenav: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  onToggle(e: any) {
    console.log("aaaa");

    this.showSidenav = e;
    console.log(e, 'toggleeeeee');
  
  }

  mouseEnter() {
    this.isShowing = true;
  }

  mouseLeave() {
    this.isShowing = false;
  }

}
